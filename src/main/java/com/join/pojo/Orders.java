package com.join.pojo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
	private int orderId;
	private int userId;
	private int totalPrice;
	private LocalDateTime orderDate;
	private String shippingAddress;
}
