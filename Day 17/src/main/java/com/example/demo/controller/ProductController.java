package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/get")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/getid/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }	

    @PostMapping("/post")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/putid/{id}")
    public Product updateProduct(@RequestParam Long id, @RequestBody Product product) {
        product.setId(id); // Ensure the ID is set
        return productRepository.save(product);
    }

    @DeleteMapping("/deleteid")
    public void deleteProduct(@RequestParam Long id) {
        productRepository.deleteById(id);
    }
}
