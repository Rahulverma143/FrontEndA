const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 150,
};
console.log(product); // output { title: 'Ball Pen', rating: 4, offer: 5, price: 150 }
console.log(product.rating); // output 4
console.log(product ["rating"]);  // output 4
product ["offer"] = product["offer"]+2;
console.log(product ["offer"]);  // output 7