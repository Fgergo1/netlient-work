package org.example.homework.service;

import org.example.homework.DTO.FilterDTO;
import org.example.homework.DTO.ProductDTO;
import org.example.homework.model.ProductEntity;
import org.example.homework.repository.ProductRepository;
import org.example.homework.specification.ProductSpecification;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

   private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public List<ProductDTO> getProductsFromDataBase () {

        return productRepository.findAll().stream()
                .map((product) -> new ProductDTO(
                        product.getArticleNumber(),
                        product.getName(),
                        product.getNetCost(),
                        product.getVAT())).toList();
    }

    public List<ProductDTO> getOrderedProductsFromDataBase (String sortBy, Boolean alreadySortedByAscend) {

        if (alreadySortedByAscend) {
            return productRepository.findAll(Sort.by(Sort.Direction.DESC, sortBy))
                    .stream().map((product) -> new ProductDTO(
                            product.getArticleNumber(),
                            product.getName(),
                            product.getNetCost(),
                            product.getVAT()
                    )).toList();

        }
        return productRepository.findAll(Sort.by(Sort.Direction.ASC, sortBy))
                .stream().map((product) -> new ProductDTO(
                        product.getArticleNumber(),
                        product.getName(),
                        product.getNetCost(),
                        product.getVAT()
                )).toList();
    }

    public List<ProductDTO> getFilteredProductsFromDataBase(List<FilterDTO> filterDTO) {
       return productRepository.findAll(ProductSpecification.columnEqual(filterDTO))
               .stream().map((product) -> new ProductDTO(
                       product.getArticleNumber(),
                       product.getName(),
                       product.getNetCost(),
                       product.getVAT()
               )).toList();
    }
}
