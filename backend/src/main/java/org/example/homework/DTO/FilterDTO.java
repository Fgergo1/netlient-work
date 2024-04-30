package org.example.homework.DTO;

import java.util.ArrayList;
import java.util.List;

public class FilterDTO {

  private String field;
  private String operator;
  private Object value;

    public FilterDTO(String field, String operator, Object value) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }

    public FilterDTO() {
    }

    public String getField() {
        return field;
    }

    public String getOperator() {
        return operator;
    }

    public Object getValue() {
        return value;
    }
}
