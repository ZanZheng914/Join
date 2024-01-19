package com.join.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
	private Menu product;
	private Integer quantity;
	private Integer totalPrice;
	
	public void calculateTotalPrice() {
		totalPrice= product.getPrice()*quantity;
	}
	public Integer getTotalPrice() {
		return totalPrice;
	}
	public void add(CartItem item) {
		// TODO Auto-generated method stub
		
	}
}
