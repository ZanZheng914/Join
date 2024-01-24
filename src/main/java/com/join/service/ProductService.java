package com.join.service;

import java.util.List;
import com.join.pojo.Product;

public interface ProductService {
	

	Product getProductByShopId(Integer shopId) ;
	
	List<Product> getAllProducts();

	Product updateProduct(Product product);

	void deleteProduct(Integer productId);

	Product addProduct(Product product);
	
}
