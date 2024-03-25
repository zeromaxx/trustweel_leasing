-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 25, 2024 at 06:35 PM
-- Server version: 8.0.31
-- PHP Version: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trustweel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gearbox` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fuel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `space` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `price`, `stock`, `image`, `year`, `gearbox`, `fuel`, `space`, `created_at`, `updated_at`, `deleted_at`) VALUES
(12, 'Toyota Corolla', '250.00', 10, 'images/1-1.jpg', '2023', 'Manual', 'Petrol', '5', NULL, NULL, NULL),
(11, 'Chevrolet Camaro', '345.00', 3, 'images/2-1.jpg', '2021', 'Automatic', 'Petrol', '4', NULL, NULL, NULL),
(10, 'Ford Mustang', '280.00', 5, 'images/3-1.jpg', '2022', 'Automatic', 'Petrol', '4', NULL, NULL, NULL),
(13, 'Honda Accord', '480.00', 7, 'images/4-1.jpg', '2022', 'Automatic', 'Petrol', '5', NULL, NULL, NULL),
(14, 'BMW 3 Series', '750.00', 4, 'images/5-1.jpg', '2022', 'Automatic', 'Petrol', '5', NULL, NULL, NULL),
(15, 'Mercedes-Benz C-Class', '470.00', 6, 'images/6-1.jpg', '2023', 'Automatic', 'Petrol', '5', NULL, NULL, NULL),
(16, 'Audi A4', '390.00', 5, 'images/7-1.jpg', '2022', 'Automatic', 'Petrol', '5', NULL, NULL, NULL),
(17, 'Tesla Model 3', '410.00', 2, 'images/9-1.jpg', '2023', 'Manual', 'Electric', '5', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `email`, `name`, `subject`, `message`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'helenvas@outlook.com', 'Mark', '3sda', 'jjjjjjj', '2024-03-23 09:36:17', '2024-03-23 09:36:17', NULL),
(2, 'helenvas@outlook.com', 'Mark', '3sdaasd', 'sasadda', '2024-03-23 09:42:29', '2024-03-23 09:42:29', NULL),
(3, 'eleni.kostas@email.com', 'access_from_home', 'asdsda', 'sdad', '2024-03-23 09:45:08', '2024-03-23 09:45:08', NULL),
(4, 'georgousis@ekkomedia.com', 'zeromax', '3sdaasd', 'ss', '2024-03-23 09:46:50', '2024-03-23 09:46:50', NULL),
(5, 'eleni.kostas@email.com', 'Mark', '3sda', 'ss', '2024-03-23 09:47:50', '2024-03-23 09:47:50', NULL),
(6, 'eleni.kostas@email.com', 'Mark', 'sadsa', 'asdads', '2024-03-23 09:48:52', '2024-03-23 09:48:52', NULL),
(7, 'admin@admin.com', 'access_from_home', 'sss', 'ss', '2024-03-23 09:49:21', '2024-03-23 09:49:21', NULL),
(8, 'helenvas@outlook.com', 'Mark', 'asdsda', 'ss', '2024-03-23 09:49:51', '2024-03-23 09:49:51', NULL),
(9, 'zeromixer2010@yahoo.com1', 'Mark', 'sdadsa', 'dsadsa', '2024-03-23 09:52:14', '2024-03-23 09:52:14', NULL),
(10, 'admin@admin.com', 'access_from_home', '3sdaasd', 'σσ', '2024-03-23 09:54:51', '2024-03-23 09:54:51', NULL),
(11, 'eleni.kostas@email.com', 'access_from_home', 'asdsda', 'σσ', '2024-03-23 09:55:01', '2024-03-23 09:55:01', NULL),
(12, 'zeromixer2010@yahoo.com', 'Marks', '2322', 'sss', '2024-03-23 09:59:36', '2024-03-23 09:59:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

DROP TABLE IF EXISTS `favourites`;
CREATE TABLE IF NOT EXISTS `favourites` (
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`user_id`, `product_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 11, '2024-03-25 11:51:14', '2024-03-25 11:51:14', NULL),
(1, 10, '2024-03-25 11:51:15', '2024-03-25 11:51:15', NULL),
(1, 12, '2024-03-25 16:35:04', '2024-03-25 16:35:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `product_id`, `address`, `phone`, `name`, `payment_type`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 1, 11, 'Some Random Address', '1234578925', 'access_from_home', 'Paypal', '2024-03-25 16:25:40', '2024-03-25 16:25:40', NULL),
(4, 1, 12, 'test@test.com', '1478523691', 'Mark', 'Mastercard', '2024-03-25 06:12:46', '2024-03-25 06:12:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'admin@admin', '$2y$10$Ca6gyOvMAFTGpyo1yUJa3er2E5rzcEjXu1cvbLppq4DBxrQWCIYx2', 'admin', '2024-03-21 16:26:20', '2024-03-21 16:26:20', NULL),
(2, 'admin@admin1', '$2y$10$Cj6226.NaI5oQ9n1pLe8l.m5Qd7dAiBucYtd92BTTLbQPMgCQpDS2', 'user', '2024-03-24 07:16:30', '2024-03-24 07:16:30', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
