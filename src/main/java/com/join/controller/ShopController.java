package com.join.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.join.pojo.Shop;
import com.join.service.ShopService;

@RestController
@RequestMapping("/shops")
public class ShopController {
	private ShopService shopService;
	
	@Autowired
	public ShopController(ShopService shopService) {
		this.shopService=shopService;
	}
	
	@GetMapping
	public List<Shop> getAllshops(){
		return shopService.getAllShops();
	}
	@GetMapping("/{shopId}")
	public Shop getShopById(@PathVariable Integer shopId) {
		return shopService.getShopById(shopId);
	}
}
