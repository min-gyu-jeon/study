
//DTO : 클래스간에 데이터를 전달하는 용도의 클래스
// 보통 데이터베이스의 테이블을 기준으로 작성

import java.util.Date;

public class ProductDto {
	
	//변수는 걸럼을 기준으로 작성
	private int    productId;
    private String productName;
    private int    categoryId;
    private int    price;
    private int    stock;
    private String description;
    private Date createdAt;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	@Override
	public String toString() {
		// String.format : system.out.printf와 동일한 사용 방법하지만 문자열과 데이터를 결합만하고 출력하지 않음
		return String.format("[%d][%d][%s][%d][%d][%s][%s]", 
				productId, categoryId, productName, price, 
				stock, description, createdAt);
	}
}
