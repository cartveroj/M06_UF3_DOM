-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 30-01-2020 a les 15:41:11
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
-- Estructura de la taula `districtes`
--

CREATE TABLE `districtes` (
  `id` int(11) NOT NULL,
  `slug` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `districtes`
--

INSERT INTO `districtes` (`id`, `slug`, `name`) VALUES
(1, 'ciutat-vella', 'Ciutat Vella'),
(2, 'eixample', 'Eixample'),
(3, 'sants-montjuic', 'Sants- Montuïc'),
(4, 'les-corts', 'Les Corts'),
(5, 'sarria-sant-gervasi', 'Sarrià- Sant Gervasi'),
(6, 'gracia', 'Gràcia'),
(7, 'horta-guinardo', 'Horta- Guinardó'),
(8, 'nou-barris', 'Nou Barris'),
(9, 'sant-andreu', 'Sant Andreu'),
(10, 'sant-marti', 'Sant Martí');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `districtes`
--
ALTER TABLE `districtes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `districtes`
--
ALTER TABLE `districtes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
