-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: spring
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `rol_id` bigint NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `rol_nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','ADMIN'),(2,'NORMAL','NORMAL');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_educacion`
--

DROP TABLE IF EXISTS `tb_educacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_educacion` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Tipo_de_educacion` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Foto_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_educacion`
--

LOCK TABLES `tb_educacion` WRITE;
/*!40000 ALTER TABLE `tb_educacion` DISABLE KEYS */;
INSERT INTO `tb_educacion` VALUES (3,'Educ. Secundaria','Educ. Secundaria con orientacion en exactas y naturales - Completa','./assets/edsec.jpg'),(10,'Educaion Universitaria','Educ. Univercitaria - Ingenieria Mecanica - UNLP - Incompleta','./assets/edsec.jpg'),(11,'Full Stack Developer','Desarllador Full Stack - Agentina Programa - Completa','./assets/edsec.jpg');
/*!40000 ALTER TABLE `tb_educacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_experiencia_lab`
--

DROP TABLE IF EXISTS `tb_experiencia_lab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_experiencia_lab` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Tipo_de_trabajo` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Foto_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_experiencia_lab`
--

LOCK TABLES `tb_experiencia_lab` WRITE;
/*!40000 ALTER TABLE `tb_experiencia_lab` DISABLE KEYS */;
INSERT INTO `tb_experiencia_lab` VALUES (2,'Pasante - Peugeot Cirtoen S.A.','Pasante de Ingenieria Mecanica en Peuegot Citroen.','./assets/psa.png'),(3,'Empleado - Peugeot Citroen S.A.','Coordinar de lanzamientos Industriales.','./assets/psa.png'),(4,'Empleado Gubernamental','Direccion de infraestructura y servicios auxiliares .','./assets/def.png');
/*!40000 ALTER TABLE `tb_experiencia_lab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_herramientas`
--

DROP TABLE IF EXISTS `tb_herramientas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_herramientas` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Tipo_de_herramienta` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Foto_url` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_herramientas`
--

LOCK TABLES `tb_herramientas` WRITE;
/*!40000 ALTER TABLE `tb_herramientas` DISABLE KEYS */;
INSERT INTO `tb_herramientas` VALUES (1,'Html','90%','https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'),(2,'Css','80%','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXcPSAa6Oqkj4re2gFIntNUPdWPVeDjn2Thf4niUd-g&s'),(3,'Angualar Cli','71%','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png'),(4,'Java','80%','https://cdn-icons-png.flaticon.com/512/226/226777.png'),(5,'MyQSL','95%','https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-how-setup-mysql-workbench-database-for-wordpress-20.png');
/*!40000 ALTER TABLE `tb_herramientas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_persona`
--

DROP TABLE IF EXISTS `tb_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_persona` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  `Mail` varchar(45) DEFAULT NULL,
  `Finalizado` tinyint(1) DEFAULT NULL,
  `Sobre_mi` varchar(300) NOT NULL,
  `Titulo` varchar(45) NOT NULL,
  `Foto_url` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_persona`
--

LOCK TABLES `tb_persona` WRITE;
/*!40000 ALTER TABLE `tb_persona` DISABLE KEYS */;
INSERT INTO `tb_persona` VALUES (1,'Ivan Dario','Alak','ivanalak@gmail.com',1,'\"La inovacion no tiene limites\"','Full Stack Develloper','');
/*!40000 ALTER TABLE `tb_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_proyectos`
--

DROP TABLE IF EXISTS `tb_proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_proyectos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre_proyecto` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Foto_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_proyectos`
--

LOCK TABLES `tb_proyectos` WRITE;
/*!40000 ALTER TABLE `tb_proyectos` DISABLE KEYS */;
INSERT INTO `tb_proyectos` VALUES (1,'Notitodo','App de noticias para un multimedios nacional.','./assets/noticias.jpg'),(2,'Didanet','Juego didadctico pensado especialmete para niños y niñas.','./assets/juego.jpg'),(4,'Portfolio ','Porfolio Personal para Argentina Programa','./assets/portfolio.png');
/*!40000 ALTER TABLE `tb_proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `perfil` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (8,'Alak','asd@gd.com',_binary '','Ain','$2a$10$LcWL6oyxSzyu.dwAGUiNI.9MipaU0jSFAw2ejp8oA1ImmSDFOhEwy','default.png','AinAlak'),(9,'Alak','ian@gd.com',_binary '','Ian','123456','default.png','IanAlak'),(10,'alak','dadfsdsddf@com.com',_binary '','lia','123456','default.png',NULL),(11,'Alak','asd@gd.com',_binary '','Ain','123456','default.png','Rocky'),(12,'Alak','asd@gd.com',_binary '','Ivan','123456','default.png','Bestia'),(13,'Alak','asd@gd.com',_binary '','Ivan','$2a$10$LcWL6oyxSzyu.dwAGUiNI.9MipaU0jSFAw2ejp8oA1ImmSDFOhEwy','default.png','foca'),(14,'Alak','ia@g.com',_binary '','Ivan','$2a$10$hhnRNnj5iq23NcUDi9DS/Ob6z0nLVr.QNfBxx0u4ZKwwL1HXNkc5W','default.png','IvanAlak'),(15,'bolmeni','asfafd@afa.com',_binary '','julian','$2a$10$686DIE5C4GPKNMlnpgM8O.cF9BBwM9o.K8kv6S6v9kf5o108PGj.S','default.png','Juli');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_rol`
--

DROP TABLE IF EXISTS `usuario_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_rol` (
  `usuario_rol_id` bigint NOT NULL AUTO_INCREMENT,
  `rol_rol_id` bigint DEFAULT NULL,
  `usuario_id` bigint DEFAULT NULL,
  PRIMARY KEY (`usuario_rol_id`),
  KEY `usuario_rol_ibfk_1` (`rol_rol_id`),
  KEY `usuario_rol_ibfk_2` (`usuario_id`),
  CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`rol_rol_id`) REFERENCES `roles` (`rol_id`),
  CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_rol`
--

LOCK TABLES `usuario_rol` WRITE;
/*!40000 ALTER TABLE `usuario_rol` DISABLE KEYS */;
INSERT INTO `usuario_rol` VALUES (2,1,9),(3,2,10),(4,2,11),(5,2,12),(6,2,13),(7,1,14),(8,2,15);
/*!40000 ALTER TABLE `usuario_rol` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-19 20:38:11
