-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-06-2023 a las 23:52:56
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdsisventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id_category` bigint(20) NOT NULL,
  `icon_category` varchar(255) DEFAULT NULL,
  `name_category` varchar(255) DEFAULT NULL,
  `user` varbinary(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id_category`, `icon_category`, `name_category`, `user`) VALUES
(1, '', 'asdasdasdsd', 0xaced0005737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000001),
(2, 'bx bx-hard-hat', 'NUEVA2', 0xaced0005737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000001),
(3, 'bx bx-hard-hat', 'NUEVA3', 0xaced0005737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000001),
(4, 'bx bx-hard-hat', 'NUEVA4', 0xaced0005737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000001);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id_product` bigint(20) NOT NULL,
  `category` int(11) DEFAULT NULL,
  `current_stock` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `initial_stock` int(11) DEFAULT NULL,
  `low` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `purchase_price` double DEFAULT NULL,
  `sale_price` double DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  `status_product` varchar(255) DEFAULT NULL,
  `user` varbinary(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id_product`, `category`, `current_stock`, `image`, `initial_stock`, `low`, `name`, `purchase_price`, `sale_price`, `sales`, `status_product`, `user`) VALUES
(1, 4, 34, 'http://res.cloudinary.com/matosr96/image/upload/v1687374740/l00buh7mgyonhtovflwe.webp', 40, 0, 'Tenis Nike Air Max 2021', 20000, 400000, 6, '', 0xaced0005737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000001);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id_role` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id_role`, `name`) VALUES
(1, 'ADMIN'),
(2, 'USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id_sale` bigint(20) NOT NULL,
  `fecha_venta` datetime(6) DEFAULT NULL,
  `total_venta` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id_sale`, `fecha_venta`, `total_venta`, `user_id`) VALUES
(1, '2023-06-21 14:18:19.562000', 400000, 0),
(2, '2023-06-21 14:31:10.393000', 400000, 0),
(3, '2023-06-21 15:01:35.139000', 4000000, 0),
(4, '2023-06-21 15:11:18.580000', 470000, 0),
(5, '2023-06-21 15:18:23.686000', 470000, 1),
(6, '2023-06-21 15:33:07.580000', 400000, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_usuario` bigint(20) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_usuario`, `apellido`, `foto`, `nombre`, `password`, `username`) VALUES
(1, 'Admin', '', 'Admin', '$2a$10$T3BNeZJxuuElJVPYtykyu.qJCRcjFqunI0BdVMKSQdd5rQEC9G26W', 'Admin'),
(2, 'MATOS', 'http://res.cloudinary.com/matosr96/image/upload/v1687379578/bnhfjyczgoxivqgmbr8v.png', 'EDGAR', '$2a$10$9jJsqBDGYWzjoCM42fWrMORE9.fSWaqYFQ3R7Jq4aRo3GuwHQWELa', 'EMATOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_roles`
--

CREATE TABLE `usuarios_roles` (
  `usuario_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios_roles`
--

INSERT INTO `usuarios_roles` (`usuario_id`, `role_id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_product_ids`
--

CREATE TABLE `venta_product_ids` (
  `venta_id_sale` bigint(20) NOT NULL,
  `product_ids` bigint(20) DEFAULT NULL,
  `product_ids_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `venta_product_ids`
--

INSERT INTO `venta_product_ids` (`venta_id_sale`, `product_ids`, `product_ids_order`) VALUES
(1, 1, 0),
(2, 1, 0),
(3, 1, 0),
(3, 1, 1),
(3, 1, 2),
(3, 1, 3),
(3, 1, 4),
(3, 1, 5),
(3, 1, 6),
(3, 1, 7),
(3, 1, 8),
(3, 1, 9),
(4, 2, 0),
(4, 1, 1),
(5, 1, 0),
(5, 2, 1),
(6, 1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id_sale`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD KEY `FKefntoswg8cckktsk0ha1wpm0i` (`role_id`),
  ADD KEY `FKgsye0r4nsxdmosxec7dv6wl8` (`usuario_id`);

--
-- Indices de la tabla `venta_product_ids`
--
ALTER TABLE `venta_product_ids`
  ADD PRIMARY KEY (`venta_id_sale`,`product_ids_order`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id_role` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id_sale` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD CONSTRAINT `FKefntoswg8cckktsk0ha1wpm0i` FOREIGN KEY (`role_id`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `FKgsye0r4nsxdmosxec7dv6wl8` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id_usuario`);

--
-- Filtros para la tabla `venta_product_ids`
--
ALTER TABLE `venta_product_ids`
  ADD CONSTRAINT `FKak5qtdas48ohtfqfq8x6tjrro` FOREIGN KEY (`venta_id_sale`) REFERENCES `sales` (`id_sale`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
