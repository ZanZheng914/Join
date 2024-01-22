package com.join.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.join.pojo.CartItem;
import com.join.service.CartItemService;

@RestController
@RequestMapping("/cartItem")
public class CartItemController {
	
	private final CartItemService cartItemService;
	
	public CartItemController(CartItemService cartItemService) {
		this.cartItemService=cartItemService;
	}
	
	@GetMapping("/{cartItemId}")
	public CartItem getCartItemById(@PathVariable Integer cartItemId) {
		return cartItemService.getCartItemById(cartItemId);
	}
	@PostMapping("/create")
	public void createCartItem(@RequestBody CartItem cartItem) {
		cartItemService.insertCartItem(cartItem);
	}
	@PutMapping("/update")
	public void updateCartItem(@RequestBody CartItem cartItem) {
		cartItemService.updateCartItem(cartItem);
	}
	@DeleteMapping("/delete/{cartItemId}")
	public void deleteCartItem(@PathVariable Integer cartItemId) {
		cartItemService.deleteCartItem(cartItemId);
	}
	
}
