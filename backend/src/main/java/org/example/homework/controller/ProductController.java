package org.example.homework.controller;

import org.example.homework.DTO.FilterDTO;
import org.example.homework.DTO.ProductDTO;
import org.example.homework.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductDTO>> getProducts () {
        List<ProductDTO> productDTOList = productService.getProductsFromDataBase();
        return ResponseEntity.ok(productDTOList);
    }

    @PostMapping("/products/order")
    public ResponseEntity<?> sortByParamValue (@RequestParam("sort") String sortBy, @RequestBody Boolean isSortedByAscend) {

        List<ProductDTO> productDTOList = productService.getOrderedProductsFromDataBase(sortBy,isSortedByAscend);

        if (!productDTOList.isEmpty()) {
            return ResponseEntity.ok(productDTOList);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/products/filter")
    public ResponseEntity<?> filterProductsByValues(@RequestBody List<FilterDTO> filterDTO) {

        List<ProductDTO> products = productService.getFilteredProductsFromDataBase(filterDTO);
        System.out.println(products);

        return  ResponseEntity.ok(products);
    }
}
