package org.example.homework.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class ProductEntity {
    @Id
    @GeneratedValue
    private Long id;
    private int articleNumber;
    private String name;
    private int netCost;
    private int VAT;


    public ProductEntity(int articleNumber, String name, int netCost, int VAT) {
        this.articleNumber = articleNumber;
        this.name = name;
        this.netCost = netCost;
        this.VAT = VAT;
    }

    public ProductEntity() {
    }

    public int getArticleNumber() {
        return articleNumber;
    }

    public void setArticleNumber(int articleNumber) {
        this.articleNumber = articleNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNetCost() {
        return netCost;
    }

    public void setNetCost(int netCost) {
        this.netCost = netCost;
    }

    public int getVAT() {
        return VAT;
    }

    public void setVAT(int VAT) {
        this.VAT = VAT;
    }
}
