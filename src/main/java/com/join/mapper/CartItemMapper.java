package com.join.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.join.pojo.CartItem;

@Mapper
public interface CartItemMapper {
	CartItem getCartItemById(@Param("cartItemId") Integer cartItemId);
	
	void insertCartItem(CartItem cartItem);
	
	void updateCartItem(CartItem cartItem);
	
	void deleteCartItem(@Param("cartItemId") Integer cartItemId);
	
	
	
}
