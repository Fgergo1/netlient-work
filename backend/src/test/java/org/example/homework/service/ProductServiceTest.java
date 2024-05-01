package org.example.homework.service;

import org.example.homework.model.ProductEntity;
import org.example.homework.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @MockBean
    private ProductRepository productRepository;

    @Test
    void getProductsFromDataBaseWhenDatabaseIsEmpty() {

        List<ProductEntity> emptyList = new ArrayList<>();

        when(productRepository.findAll()).thenReturn(emptyList);
        assertEquals(productService.getProductsFromDataBase().size(), 0 );
    }

    @Test
    void getProductsFromDataBaseWhenDatabaseHasProducts() {
        List<ProductEntity> productEntityList = new ArrayList<>();

        ProductEntity productEntity1 = new ProductEntity();
        ProductEntity productEntity2 = new ProductEntity();
        productEntityList.add(productEntity1);
        productEntityList.add(productEntity2);

        when(productRepository.findAll()).thenReturn(productEntityList);
        assertEquals(productService.getProductsFromDataBase().size(), 2);
    }


}