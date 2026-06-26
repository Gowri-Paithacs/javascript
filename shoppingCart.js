const cart = {
  // Getting cart from sessionStorage
  getCart() {
    const data = sessionStorage.getItem("cart");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  },
  // Saving cart
  saveCart(items) {
    sessionStorage.setItem("cart", JSON.stringify(items));
  },
  // Adding product
  add(product) {
    let items = this.getCart();
    let existing = items.find((item)=>item.id===product.id);
    if (existing) {
      existing.qty++;
    } else {
      product.qty = 1;
      items.push(product);
    }
    this.saveCart(items);
  },
  // Removing product
  remove(id) {
    let items = this.getCart();
    items = items.filter((item)=>item.id!==id);
    this.saveCart(items);
  },
  // Updating quantity
  updateQuantity(id, qty) {
    let items=this.getCart();
    let product=items.find((item)=>item.id===id);
    if (product) {
      product.qty=qty;
    }
    this.saveCart(items);
  },
  // Total price
  total() {
    let items=this.getCart();
    let total=0;
    for (let item of items) {
      total+=item.price * item.qty;
    }
    return total;
  },

  // Get all products
  getAll() {
    return this.getCart();
  },
};

// Testing
cart.add({
  id: 1,
  name: "Shirt",
  price: 499,
});
cart.add({
  id: 1,
  name: "Shirt",
  price: 499,
});
console.log(cart.getAll());
console.log(cart.total());
cart.updateQuantity(1, 3);
console.log(cart.getAll());
console.log(cart.total());
cart.remove(1);
console.log(cart.getAll());
console.log(cart.total());
