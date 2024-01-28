package com.join.service;

import java.util.List;

import com.join.pojo.CartItem;

public interface CartItemService {

    CartItem getCartItemById(Integer cartItemId);

    void insertCartItem(CartItem cartItem);

    void updateCartItem(CartItem cartItem);

    void deleteCartItem(Integer cartItemId);

	void saveCart(List<CartItem> cartItem);
	
    CartItem getCartItemByProductIdAndUserId(Integer productId, Integer userId);
	
	
}
