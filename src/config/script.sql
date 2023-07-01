-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para api_daria
CREATE DATABASE IF NOT EXISTS `api_daria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `api_daria`;

-- Volcando estructura para tabla api_daria.personajes_diaria
CREATE TABLE IF NOT EXISTS `personajes_diaria` (
  `id_per` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) NOT NULL,
  `descripcion` varchar(64) NOT NULL,
  `edad` int(11) NOT NULL,
  `genero` tinyint(4) NOT NULL,
  `companero` tinyint(4) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_per`) USING BTREE,
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla api_daria.personajes_diaria: ~2 rows (aproximadamente)
DELETE FROM `personajes_diaria`;
INSERT INTO `personajes_diaria` (`id_per`, `nombre`, `descripcion`, `edad`, `genero`, `companero`, `id_usuario`) VALUES
	(1, 'Daria', 'Morgendorffer', 25, 1, 1, 2),
	(3, 'Jane', 'Lane', 25, 1, 1, 2);

-- Volcando estructura para tabla api_daria.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `apellido` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla api_daria.usuario: ~0 rows (aproximadamente)
DELETE FROM `usuario`;
INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellido`, `user`, `password`, `activo`) VALUES
	(1, 'Johanna', 'Hernandez', 'jhernandez', '$2b$10$btgrhs1BkCYNgtURCxyyfePVxPGSxnytygSabcEUbrHel3eZkiLdC', 1),
	(2, 'Ana', 'Fernandez', 'afernandez', '$2b$10$Gh3ChQMx64mbyGDqb2Eb0uK6z0c7euPtSjCeNd.7GWtaqVHq.lfdS', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
