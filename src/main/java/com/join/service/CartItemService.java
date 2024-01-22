package com.join.service;

import com.join.pojo.CartItem;

public interface CartItemService {

    CartItem getCartItemById(Integer cartItemId);

    void insertCartItem(CartItem cartItem);

    void updateCartItem(CartItem cartItem);

    void deleteCartItem(Integer cartItemId);
	
	
	
	
}
