package com.join.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	@PostMapping("/saveCart")
	public void saveCart(@RequestBody Map<String ,List<CartItem>> cartItemsMap) {
        List<CartItem> cartItems = cartItemsMap.get("cartItems");
        cartItemService.saveCart(cartItems);
	}
	@PutMapping("/update")
	public void updateCartItem(@RequestBody CartItem cartItem) {
		cartItemService.updateCartItem(cartItem);
	}
	@DeleteMapping("/delete/{cartItemId}")
	public void deleteCartItem(@PathVariable Integer cartItemId) {
		cartItemService.deleteCartItem(cartItemId);
	}
	
    @GetMapping("/getCartItemByProductIdAndUserId")
    public CartItem getCartItemByProductIdAndUserId(@RequestParam Integer productId, @RequestParam Integer userId) {
        return cartItemService.getCartItemByProductIdAndUserId(productId, userId);
    }
	
}
