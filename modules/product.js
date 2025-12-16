// Product Module

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `${this.name} costs $${this.price.toFixed(2)}`;
    }

    applyDiscount(discountPercent) {
        const discountAmount = (discountPercent / 100) * this.price;
        this.price -= discountAmount;
    }

    static comparePrices(productA, productB) {
        return productA.price - productB.price;
    }

}

export default Product;
export { Product };
