DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` int DEFAULT NULL,
  `gearbox` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fuel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `space` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `price`, `stock`, `model`, `image`, `year`, `gearbox`, `fuel`, `space`) VALUES
(12, 'Toyota Corolla', '20000.00', 10, 'SE', NULL, 2023, 'Manual', 'Petrol', 5),
(11, 'Chevrolet Camaro', '31500.00', 3, 'LT', NULL, 2021, 'Automatic', 'Petrol', 4),
(10, 'Ford Mustang', '36000.00', 5, 'GT', NULL, 2022, 'Automatic', 'Petrol', 4),
(13, 'Honda Accord', '24000.00', 7, 'Sport', NULL, 2022, 'Automatic', 'Petrol', 5),
(14, 'BMW 3 Series', '41000.00', 4, '330i', NULL, 2022, 'Automatic', 'Petrol', 5),
(15, 'Mercedes-Benz C-Class', '43000.00', 6, 'C300', NULL, 2023, 'Automatic', 'Petrol', 5),
(16, 'Audi A4', '39000.00', 5, 'Premium', NULL, 2022, 'Automatic', 'Petrol', 5),
(17, 'Tesla Model 3', '48000.00', 2, 'Standard Range Plus', NULL, 2023, 'Manual', 'Electric', 5);

CREATE TABLE `users` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    deleted_at timestamp NULL DEFAULT NULL
)

CREATE TABLE `contacts` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    deleted_at timestamp NULL DEFAULT NULL
)

CREATE TABLE `favourites` (
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
)
