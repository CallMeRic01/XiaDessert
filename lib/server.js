if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

process.on('uncaughtException', (e) => {
    console.error(e);
});

const config = require('./setup/config');
const debug = require('debug')('server-connect:server');
const secure = require('./setup/secure');
const routes = require('./setup/routes');  // Load your routes
const sockets = require('./setup/sockets');
const upload = require('./setup/upload');
const cron = require('./setup/cron');
const http = require('http');
const express = require('express');
const endmw = require('express-end');
const cookieParser = require('cookie-parser');
const session = require('./setup/session');
const cors = require('cors');

const app = express();

app.set('trust proxy', true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Ensure views are set correctly
app.set('view options', { root: 'views', async: true });

app.disable('x-powered-by');

if (config.compression) {
    const compression = require('compression');
    app.use(compression());
}

if (config.abortOnDisconnect) {
    app.use((req, res, next) => {
        req.isDisconnected = false;
        req.on('close', () => {
            req.isDisconnected = true;
        });
        next();
    });
}

app.use(cors(config.cors));
app.use(express.static(path.join(__dirname, 'public'), config.static));  // Ensure static files are served correctly
app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));
app.use(cookieParser(config.secret));
app.use(session);
app.use(endmw);

// Set up custom middleware or any additional setup here
upload(app);
secure(app);

// Load routes
routes(app);

const server = http.createServer(app);
const io = sockets(server, session);

// Make sockets globally available
global.io = io;

module.exports = {
    server, app, io,
    start: function (port) {
        // 404 Error handling
        app.use((req, res) => {
            res.status(404).render('404', { url: req.originalUrl });  // Ensure 404.ejs exists in the views folder
        });

        // 500 Error handling
        app.use((err, req, res, next) => {
            debug(`Got error? %O`, err);
            res.status(500).render('500', { error: err });  // Ensure 500.ejs exists in the views folder
        });

        // Start cron jobs if configured
        cron.start();

        // Start the server
        server.listen(port || config.port, () => {
            console.log(`App listening at http://localhost:${config.port}`);
        });
    }
};
