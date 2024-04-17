class MenuItems {
    constructor(id, type ,name, image, price, description) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description
    }

    toString() {
        return `${this.type} ${this.name} ${this.price} ${this.description}`;
    }
}

export default MenuItems;
