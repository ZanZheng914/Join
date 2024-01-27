package com.join.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.join.mapper.CartItemMapper;
import com.join.pojo.CartItem;
import com.join.service.CartItemService;

@Service
public class CartItemServiceImpl implements CartItemService{
	
	private final CartItemMapper cartItemMapper;
	
	@Autowired
	public CartItemServiceImpl(CartItemMapper cartItemMapper) {
		this.cartItemMapper = cartItemMapper;
	}

	@Override
	public CartItem getCartItemById(Integer cartItemId) {
		return cartItemMapper.getCartItemById(cartItemId);
	}

	@Override
	public void insertCartItem(CartItem cartItem) {
		cartItemMapper.insertCartItem(cartItem);
	}

	@Override
	public void updateCartItem(CartItem cartItem) {
		cartItemMapper.updateCartItem(cartItem);
	}

	@Override
	public void deleteCartItem(Integer cartItemId) {
		cartItemMapper.deleteCartItem(cartItemId);
	}
	@Override
	public void addToCart(CartItem cartItem) {
		//如果user已經有cart item時，只需要更新數量等內容
	    CartItem existingCartItem = getCartItemByProductIdAndUserId(cartItem.getProductId(), cartItem.getUserId());
	    if(existingCartItem != null) {
	        existingCartItem.setQuantity(existingCartItem.getQuantity() + cartItem.getQuantity());
	        existingCartItem.setSubTotal(existingCartItem.getPrice() * existingCartItem.getQuantity());
	        updateCartItem(existingCartItem);
	    } else {
	        insertCartItem(cartItem);
	    }
	}

	@Override
	public CartItem getCartItemByProductIdAndUserId(Integer productId, Integer userId) {
        return cartItemMapper.getCartItemByProductIdAndUserId(productId,userId);
	}
}
