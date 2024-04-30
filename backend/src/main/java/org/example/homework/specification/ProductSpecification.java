package org.example.homework.specification;

import jakarta.persistence.criteria.Predicate;
import org.example.homework.DTO.FilterDTO;
import org.example.homework.model.ProductEntity;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ProductSpecification {

    public static Specification<ProductEntity> columnEqual(List<FilterDTO> filterDTO) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();



            filterDTO.forEach(filter -> {
                if ((isNumeric(filter.getValue())) && Objects.equals(filter.getField(), "articleNumber")) {
                    predicates.add(criteriaBuilder.equal(root.get(filter.getField()), filter.getValue()));
                    }
                else if (isNumeric(filter.getValue())) {
                    switch (filter.getOperator()) {
                        case "Equal" : predicates.add(criteriaBuilder.equal(root.get(filter.getField()), filter.getValue())); break;
                        case "Lower" : predicates.add(criteriaBuilder.lessThan(root.get(filter.getField()), (Integer)filter.getValue()));  break;
                        case "Higher" : predicates.add(criteriaBuilder.greaterThan(root.get(filter.getField()), (Integer)filter.getValue()));  break;
                    }
                } else  {
                    switch (filter.getOperator()) {
                        case "Partial" : predicates.add(criteriaBuilder.like(root.get(filter.getField()), "%" + filter.getValue() + "%")); break;
                        case "Exact" : predicates.add(criteriaBuilder.equal(root.get(filter.getField()), filter.getValue())); break;
                    }
                }
            });
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

    }



    public static boolean isNumeric(Object strNum) {
        if (strNum == null) {
            return false;
        } else return !(strNum instanceof String);
    }
}
