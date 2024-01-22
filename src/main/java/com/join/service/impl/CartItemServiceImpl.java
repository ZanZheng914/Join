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
	
}
