-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: xiad
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `wappler_migrations`
--

DROP TABLE IF EXISTS `wappler_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wappler_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wappler_migrations`
--

LOCK TABLES `wappler_migrations` WRITE;
/*!40000 ALTER TABLE `wappler_migrations` DISABLE KEYS */;
INSERT INTO `wappler_migrations` VALUES (1,'20240610072057_delete temp tables.js',1,'2024-06-10 15:20:58'),(2,'20240610073852_product table created.js',2,'2024-06-10 15:38:53'),(3,'20240610074720_customer table created.js',3,'2024-06-10 15:47:20'),(4,'20240611022201_order table.js',4,'2024-06-11 10:22:02'),(5,'20240611022238_delete test table.js',5,'2024-06-11 10:22:39'),(6,'20240611022411_change some details.js',6,'2024-06-11 10:24:12'),(7,'20240611022848_branch promo payment table created.js',7,'2024-06-11 10:28:49'),(8,'20240611023212_deliver salesReport table created.js',8,'2024-06-11 10:32:13'),(9,'20240611023432_crm ingredient table created.js',9,'2024-06-11 10:34:32'),(10,'20240621040218_added some into order table.js',10,'2024-06-21 12:02:18'),(11,'20240621041006_changes on detOrd and Ord.js',11,'2024-06-21 12:10:07'),(12,'20240621043256_added pro_stock.js',12,'2024-06-21 12:32:56'),(13,'20240625085016_added reference.js',13,'2024-06-25 16:50:17'),(14,'20240701035603_changes on order.js',14,'2024-07-01 11:56:04'),(15,'20240701041342_added order_details.js',15,'2024-07-01 12:13:43'),(16,'20240701041414_remove order_details to change .js',16,'2024-07-01 12:14:15'),(17,'20240701041511_change detailsOrder.js',17,'2024-07-01 12:15:12'),(23,'20240702064345_a.js',20,'2024-07-02 16:36:38'),(25,'20240703013924_delete user table.js',21,'2024-07-03 09:39:24'),(26,'20240703014353_user table added.js',22,'2024-07-03 09:43:54'),(27,'20240703014428_role table added.js',23,'2024-07-03 09:44:29'),(28,'20240703014600_changes on user table.js',24,'2024-07-03 09:46:01'),(29,'20240715021836_smol changes.js',25,'2024-07-15 10:18:37'),(30,'20240716024621_change on role.js',26,'2024-07-16 10:46:22'),(31,'20240717062508_detord changes.js',27,'2024-07-17 14:25:09'),(34,'20240722075218_rep_opening,closing,expenses,remarks added.js',28,'2024-07-22 15:52:18'),(35,'20240722080908_profitOrLoss.js',29,'2024-07-22 16:09:09'),(36,'20240724012643_added clock in out.js',30,'2024-07-24 09:26:44'),(37,'20240724015645_change data type.js',31,'2024-07-24 09:56:46'),(38,'20240724020013_add data clockinout.js',32,'2024-07-24 10:00:14'),(39,'20240724020032_data.js',33,'2024-07-24 10:00:32'),(40,'20240726062742_add table.js',34,'2024-07-26 14:27:43'),(41,'20240726063547_sub table.js',35,'2024-07-26 14:35:48'),(42,'20240730021743_changes and add.js',36,'2024-07-30 10:17:45'),(43,'20240805060541_change.js',37,'2024-08-05 14:05:42'),(46,'20240805070431_delete.js',38,'2024-08-05 15:04:32'),(47,'20240805070454_add back.js',39,'2024-08-05 15:04:54'),(48,'20240808034534_add reference for detOrd.js',40,'2024-08-08 11:45:35');
/*!40000 ALTER TABLE `wappler_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-26 14:35:54
