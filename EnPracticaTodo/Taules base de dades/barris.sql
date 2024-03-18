-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 30-01-2020 a les 15:41:04
-- Versió del servidor: 10.4.8-MariaDB
-- Versió de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `m6`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `barris`
--

CREATE TABLE `barris` (
  `id` int(11) NOT NULL,
  `id_districte` int(11) NOT NULL,
  `slug` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `barris`
--

INSERT INTO `barris` (`id`, `id_districte`, `slug`, `name`) VALUES
(1, 1, 'la-barceloneta', 'La Barceloneta'),
(2, 1, 'el-gotic', 'El Gòtic'),
(3, 1, 'sant-pere-santa-caterina-i-la-ribera', 'Sant Pere, Santa Caterina i la Ribera'),
(4, 2, 'l-antiga-esquerra-de-l-eixample', 'L\'Antiga Esquerra de l\'Eixample'),
(5, 2, 'la-nova-esquerra-de-l-eixample', 'La Nova Esquerra de l\'Eixample'),
(6, 2, 'dreta-de-l-eixample', 'Dreta de l\'Eixample'),
(7, 2, 'fort-pienc', 'Fort Pienc'),
(8, 2, 'sagrada-familia', 'Sagrada Família'),
(9, 2, 'sant-antoni', 'Sant Antoni'),
(10, 3, 'la-bordeta', 'La Bordeta'),
(11, 3, 'la-font-de-la-guatlla', 'La Font de la Guatlla'),
(12, 3, 'hostafrancs', 'Hostafrancs'),
(13, 3, 'la-marina-de-port', 'La Marina de Port'),
(14, 3, 'la-marina-del-prat-vermell', 'La Marina del Prat Vermell'),
(15, 3, 'el-poble-sec', 'El Poble Sec'),
(16, 3, 'sants', 'Sants'),
(17, 3, 'sants-badal', 'Sants- Badal'),
(18, 3, 'montjuic', 'Montjuïc'),
(19, 3, 'la-zona-franca-port', 'La Zona Franca- Port'),
(20, 4, 'les-corts', 'Les Corts'),
(21, 4, 'la-maternitat-i-sant-ramon', 'La Maternitat i Sant Ramon'),
(22, 4, 'pedralbes', 'Pedralbes'),
(23, 5, 'el-putget-i-farro', 'El Putget i Farró'),
(24, 5, 'sarria', 'Sarrià'),
(25, 5, 'sant-gervasi-la-bonanova', 'Sant Gervasi- La Bonanova'),
(26, 5, 'sant-gervasi-galvany', 'Sant Gervasi- Galvany'),
(27, 5, 'les-tres-torres', 'Les Tres Torres'),
(28, 5, 'vallvidriera-el-tibidabo-i-les-planes', 'Vallvidriera, el Tibidabo i les Planes'),
(29, 6, 'vila-de-gracia', 'Vila de Gràcia'),
(30, 6, 'camp-d-en-grassot-i-gracia-nova', 'Camp d\'en Grassot i Gràcia Nova'),
(31, 6, 'la-salut', 'La Salut'),
(32, 6, 'barri-del-coll', 'Barri del Coll'),
(33, 6, 'vallcarca-i-els-penitents', 'Vallcarca i els Penitents'),
(34, 7, 'el-baix-guinardo', 'El Baix Guinardó'),
(35, 7, 'el-guinardo', 'El Guinardó'),
(36, 7, 'barri-de-can-baro', 'Barri de Can Baró'),
(37, 7, 'el-carmel', 'El Carmel'),
(38, 7, 'la-font-d-en-fargues', 'La Font d\'en Fargues'),
(39, 7, 'horta', 'Horta'),
(40, 7, 'la-clota', 'La Clota'),
(41, 7, 'montbau', 'Montbau'),
(42, 7, 'sant-genis-dels-agudells', 'Sant Genís dels Agudells'),
(43, 7, 'la-teixonera', 'La Teixonera'),
(44, 7, 'la-vall-d-hebron', 'La Vall d\'Hebron'),
(56, 8, 'can-paguera', 'Can Paguera'),
(57, 8, 'canyelles', 'Canyelles'),
(58, 8, 'ciutat-meridiana', 'Ciutat Meridiana'),
(59, 8, 'la-guineueta', 'La Guineueta'),
(60, 8, 'porta', 'Porta'),
(61, 8, 'prosperitat', 'Prosperitat'),
(62, 8, 'les-roquetes', 'Les Roquetes'),
(63, 8, 'torre-baro', 'Torre Baró'),
(64, 8, 'la-trinitat-nova', 'La Trinitat Nova'),
(65, 8, 'el-turo-de-la-peira', 'El Turó de la Peira'),
(66, 8, 'vallbona', 'Vallbona'),
(67, 8, 'verdum', 'Verdum'),
(68, 8, 'vilapiscina-i-la-torre-llobeta', 'Vilapiscina i la Torre Llobeta'),
(69, 9, 'baro-de-viver', 'Baró de Viver'),
(70, 9, 'bon-pastor', 'Bon Pastor'),
(71, 9, 'el-congres-i-els-indians', 'El Congrés i els Indians'),
(72, 9, 'navas', 'Navas'),
(73, 9, 'sant-andreu-de-palomar', 'Sant Andreu de Palomar'),
(74, 9, 'la-sagrera', 'La Sagrera'),
(75, 9, 'trinitat-vella', 'Trinitat Vella'),
(76, 10, 'el-besos-i-el-maresme', 'El Besòs i el Maresme'),
(77, 10, 'el-clot', 'El Clot'),
(78, 10, 'el-camp-de-l-arpa-del-clot', 'El Camp de l\'Arpa del Clot'),
(79, 10, 'diagonal-mar-i-el-front-maritim-del-poblenou', 'Diagonal Mar i el Front Marítim del Poblenou'),
(80, 10, 'el-parc-i-la-llacuna-del-poblenou', 'El Parc i la Llacuna del Poblenou'),
(81, 10, 'el-poblenou', 'El Poblenou'),
(82, 10, 'provencals-del-poblenou', 'Provençals del Poblenou'),
(83, 10, 'sant-marti-de-provencals', 'Sant Martí de Provençals'),
(84, 10, 'la-verneda-i-la-pau', 'La Verneda i la Pau'),
(85, 10, 'la-vila-olimpica-del-poblenou', 'La Vila Olímpica del Poblenou');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `barris`
--
ALTER TABLE `barris`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `barris`
--
ALTER TABLE `barris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
