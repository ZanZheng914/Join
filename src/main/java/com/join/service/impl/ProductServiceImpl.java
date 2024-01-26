package com.join.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.join.mapper.ProductMapper;
import com.join.pojo.Product;
import com.join.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public List<Product> getProductByShopId(Integer shopId) {
        return productMapper.getProductByShopId(shopId);
    }

    @Override
    public List<Product> getAllProducts() {
        return productMapper.getAllProducts();
    }

    @Override
    public Product updateProduct(Product product) {
        productMapper.updateProduct(product);
        return product;
    }

    @Override
    public void deleteProduct(Integer productId) {
        productMapper.deleteProduct(productId);
    }

    @Override
    public Product addProduct(Product product) {
        productMapper.addProduct(product);
        return product;
    }
}
