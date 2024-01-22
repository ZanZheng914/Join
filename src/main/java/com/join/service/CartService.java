package com.join.service;

import com.join.pojo.Cart;

public interface CartService {
	
	
	public Cart getCartbyId(Integer cartId) ;
	
	public void insertCart(Cart cart) ;	
	
	public void updateCart(Cart cart);
	
	public void deleteCart(Integer cartId);
	
	public Integer getTotalPrice(Integer cartId);
}
