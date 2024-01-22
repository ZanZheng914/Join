package com.join.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.join.mapper.CartMapper;
import com.join.pojo.Cart;
import com.join.service.CartService;

@Service
public class CartServiceImpl implements CartService {
    private final CartMapper cartMapper;

    @Autowired
    public CartServiceImpl(CartMapper cartMapper) {
        this.cartMapper = cartMapper;
    }

    @Override
    public Cart getCartbyId(Integer cartId) {
        return cartMapper.getCartById(cartId);
    }

    @Override
    public void insertCart(Cart cart) {
        cartMapper.insertCart(cart);
    }

	@Override
	public void updateCart(Cart cart) {
		cartMapper.updateCart(cart);
	}

	@Override
	public void deleteCart(Integer cartId) {
		cartMapper.deleteCart(cartId);
	}

	@Override
	public Integer getTotalPrice(Integer cartId) {
		return cartMapper.getTotalPrice(cartId);
	}

}

