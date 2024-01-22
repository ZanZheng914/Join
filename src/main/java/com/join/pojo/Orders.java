package com.join.pojo;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
	private int orderId;
	private User user;
	private int totalPrice;
	private LocalDateTime orderDate;
	private String shippingAddress;
	
	private Cart cart;
	private List<CartItem> cartItems;
}
