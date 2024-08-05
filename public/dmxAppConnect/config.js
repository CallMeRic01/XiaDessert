dmx.config({
  "test": {
    "employee": {
      "meta": [
        {
          "type": "text",
          "name": "user_firstName"
        },
        {
          "type": "text",
          "name": "user_lastName"
        }
      ],
      "outputType": "array"
    }
  },
  "navbar": {
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "user_firstName"
        },
        {
          "type": "text",
          "name": "user_lastName"
        }
      ],
      "outputType": "array"
    },
    "clockInStore": [
      {
        "type": "boolean",
        "name": "clockedIn"
      },
      {
        "type": "text",
        "name": "clockInTime"
      },
      {
        "type": "text",
        "name": "user_id"
      },
      {
        "type": "text",
        "name": "clockOutTime"
      }
    ]
  }
});
