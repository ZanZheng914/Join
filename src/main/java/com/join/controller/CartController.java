package com.join.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.join.pojo.Cart;
import com.join.pojo.CartItem;
import com.join.service.CartService;

@RequestMapping("/cart")
@RestController
public class CartController {
	
	private final CartService cartService;
	
	@Autowired
	public CartController(CartService cartService) {
		this.cartService=cartService;
	}
	@GetMapping("/{cartId}")
	public Cart getCartById(@PathVariable Integer cartId) {
		return cartService.getCartbyId(cartId);
	}
	@PostMapping("/add-to-cart")
	public void addToCart(@RequestBody CartItem cartItem) {
		cartService.addToCart(cartItem);
	}
	@PutMapping("/update")
	public void updateCart(@RequestBody Cart cart) {
		cartService.updateCart(cart);
	}
	@DeleteMapping("/delete")
	public void deleteCart(@PathVariable Integer cartId) {
		cartService.deleteCart(cartId);
	}
	@GetMapping("/totalPrice/{cartId}")
	public Integer getTotalPrice(@PathVariable Integer cartId) {
		return cartService.getTotalPrice(cartId);
	}
	
}
