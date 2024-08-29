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
-- Table structure for table `productByDay`
--

DROP TABLE IF EXISTS `productByDay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productByDay` (
  `pd_id` int unsigned NOT NULL AUTO_INCREMENT,
  `pd_day` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pro_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`pd_id`),
  KEY `productbyday_pro_id_foreign` (`pro_id`),
  CONSTRAINT `productbyday_pro_id_foreign` FOREIGN KEY (`pro_id`) REFERENCES `product` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productByDay`
--

LOCK TABLES `productByDay` WRITE;
/*!40000 ALTER TABLE `productByDay` DISABLE KEYS */;
INSERT INTO `productByDay` VALUES (8,'Monday',63),(9,'Monday',64),(10,'Monday',65),(14,'Friday',59),(15,'Friday',61),(16,'Friday',65),(24,'Thursday',59),(25,'Thursday',60),(26,'Thursday',61),(27,'Thursday',62),(28,'Thursday',63),(29,'Thursday',64),(30,'Thursday',65),(34,'Wednesday',59),(35,'Wednesday',61),(36,'Wednesday',62),(37,'Tuesday',59),(38,'Tuesday',60),(39,'Tuesday',62);
/*!40000 ALTER TABLE `productByDay` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-26 14:35:51
