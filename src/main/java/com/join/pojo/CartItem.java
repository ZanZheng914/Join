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
	private Integer productId;
	private Integer quantity;
	private Integer price;
	private Integer subTotal;
	private String ice;
	private String sugar;
	
	private Product product;
}
