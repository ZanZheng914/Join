package com.join.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.join.pojo.Product;
import com.join.service.ProductService;

@RequestMapping("/product")
@RestController
public class ProductController {
	//處理HTTP請求，瀏覽商品
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/{shopId}")
	public Product getProductByShopId(@RequestParam Integer shopId) {
		return productService.getProductByShopId(shopId);
	}
	@GetMapping
	public List<Product> getAllProducts(){
		List<Product> products = productService.getAllProducts();
		System.out.println("products from getAllProducts"+products);
		return products;
	}
	@PostMapping("/add")
	public Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}
	@PutMapping("/update")
	public Product updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}
	@DeleteMapping("/delete/{productId}")
	public void deleteProduct(@PathVariable Integer productId) {
		productService.deleteProduct(productId);
	}
}
