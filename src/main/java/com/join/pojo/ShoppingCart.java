package com.join.pojo;

import java.util.List;

public class ShoppingCart {
	
	private List<CartItems> items;
	private Integer totalPrice;
	
	//新增商品到購物車
	public void addItem(CartItems item) {
		item.add(item);
		recalculateTotalPrice();
	}
	//移除購物車商品
	public void removeItem(CartItems item) {
		items.remove(item);
		recalculateTotalPrice();
	}
	private void recalculateTotalPrice() {
		totalPrice = (int) items.stream().mapToDouble(CartItems::getTotalPrice).sum();
	}
	public Integer getTotalPrice() {
		return totalPrice;
	}
}
