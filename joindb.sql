-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2024 年 01 月 26 日 08:00
-- 伺服器版本： 5.7.39
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `joindb`
--

-- --------------------------------------------------------

--
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `cartid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `createTime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `cartItem`
--

CREATE TABLE `cartItem` (
  `cartItemId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `subTotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `orderItem`
--

CREATE TABLE `orderItem` (
  `orderItemId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `subTotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `orderDate` date NOT NULL,
  `shippingAddress` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `productid` int(11) NOT NULL,
  `shopid` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`productid`, `shopid`, `productName`, `price`) VALUES
(1, 1, '八曜和茶', 35),
(2, 1, '極上307', 37),
(3, 1, '406紅茶', 46),
(4, 1, '柚香覺醒307', 67),
(5, 1, '寧夏307', 60),
(6, 1, '京楓檸檬紅茶', 50),
(7, 1, '雪匠奶茶', 69),
(8, 2, '竹香翡翠', 40),
(9, 2, '招牌紅茶', 35),
(10, 2, '炭培烏龍', 35),
(11, 2, '油切蕎麥茶', 35),
(12, 2, '手採高山青', 35),
(13, 2, '桂花蕎麥茶', 55),
(14, 2, '柚子烏龍', 65),
(15, 2, '粉粿舞伎406奶茶', 79),
(16, 2, '極黑芝麻拿鐵', 80);

-- --------------------------------------------------------

--
-- 資料表結構 `shop`
--

CREATE TABLE `shop` (
  `shopId` int(11) NOT NULL,
  `shopName` varchar(255) NOT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `joinTime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `shop`
--

INSERT INTO `shop` (`shopId`, `shopName`, `tel`, `address`, `joinTime`) VALUES
(1, '八曜和茶台中精誠門市', '0422667788', '台中市西區精誠路25號', '2024-01-01'),
(2, '一沐日台中大墩店', '0428825252', '台中市南屯區大墩十一街294號', '2024-01-01');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` smallint(6) NOT NULL,
  `company` varchar(255) NOT NULL,
  `dept` varchar(255) NOT NULL,
  `createTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`userid`, `username`, `password`, `name`, `email`, `gender`, `company`, `dept`, `createTime`) VALUES
(1, 'user', 'user', '皮卡丘', 'user@mail.com', 1, '台積電竹科廠', '人資部', '2024-01-02'),
(2, 'user2', '$2a$10$n3nkjK/sreQ8Y/VqN6uZm.sBsR4qR74LJtY5rdT0OAHbhCYSulQzi', 'user2', 'user2@mail.com', 1, '測試公司', '測試部', '2024-01-04'),
(3, 'user3', '$2a$10$LoDWm1cU/Jj61jmaoNz9oOIldIefSSPHMm5AvDNOiGtiAJG6AtL/K', 'user3', 'user3@mail.com', 1, 'UU', 'EE', '2024-01-23'),
(4, 'eeee', '$2a$10$U91DEdPAXi4LcbTeAMLWCOVC5MP5cEV9zQgFPsUQP90xLNVzhgkK.', '4個e', 'ee@gaj.com', 1, 'IU', 'OwO', '2024-01-24');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartid`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `cartItem`
--
ALTER TABLE `cartItem`
  ADD PRIMARY KEY (`cartItemId`),
  ADD KEY `cartId` (`cartId`),
  ADD KEY `productId` (`productId`);

--
-- 資料表索引 `orderItem`
--
ALTER TABLE `orderItem`
  ADD PRIMARY KEY (`orderItemId`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `userId` (`userId`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productid`),
  ADD KEY `shopid` (`shopid`);

--
-- 資料表索引 `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`shopId`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `cartid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cartItem`
--
ALTER TABLE `cartItem`
  MODIFY `cartItemId` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderItem`
--
ALTER TABLE `orderItem`
  MODIFY `orderItemId` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `productid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shop`
--
ALTER TABLE `shop`
  MODIFY `shopId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);

--
-- 資料表的限制式 `cartItem`
--
ALTER TABLE `cartItem`
  ADD CONSTRAINT `cartitem_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `cart` (`cartid`),
  ADD CONSTRAINT `cartitem_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`productid`);

--
-- 資料表的限制式 `orderItem`
--
ALTER TABLE `orderItem`
  ADD CONSTRAINT `orderitem_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`),
  ADD CONSTRAINT `orderitem_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`productid`);

--
-- 資料表的限制式 `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`);

--
-- 資料表的限制式 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`shopid`) REFERENCES `shop` (`shopId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
