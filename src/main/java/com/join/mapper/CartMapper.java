package com.join.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.join.pojo.Cart;

@Mapper
public interface CartMapper {
	//處理資料庫操作，新增購物車、查詢購物車
	
	Cart getCartById(@Param("CartId") Integer CartId);
	
	void insertCart(Cart cart);
	
	void updateCart(Cart cart);
	
	void deleteCart(@Param("cartId") Integer CartId);
	
	Integer getTotalPrice(@Param("cartId") Integer CartId);
}
