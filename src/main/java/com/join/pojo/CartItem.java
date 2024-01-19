package com.join.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
	private Integer cartItemId;
	private Integer cartId;
	private Integer menuId;
	private Integer quantity;
	private Menu menu;
	private Integer subTotal;
	
	public void calculateSubTotal() {
		subTotal= menu.getPrice() * quantity;
	}
    public Integer getTotalPrice() {
        return subTotal;
    }

	public void add(CartItem item) {
		// TODO Auto-generated method stub
		
	}
}
