package org.example.homework.DTO;

public class ProductDTO {

    private int articleNumber;
    private String name;
    private int netCost;
    private int VAT;


    public ProductDTO(int articleNumber, String name, int netCost, int VAT) {
        this.articleNumber = articleNumber;
        this.name = name;
        this.netCost = netCost;
        this.VAT = VAT;
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
