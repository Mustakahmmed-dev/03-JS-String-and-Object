// check category wise products and set to a different array based on category

let products = [
    {name: "computer", category: "electronics"},
    {name: "car", category: "electronics"},
    {name: "shirt", category: "clothing"},
    {name: "lungi", category: "clothing"},
    {name: "laptop", category: "electronics"},
]

let productList = {
    electronics: [],
    clothing: [],
}
for(let i = 0; i < products.length; i++){
    let product = products[i];
    if(product.category === "electronics"){
        let items = product.name;
        productList.electronics.push(items);
    }
    else if(product.category === "clothing"){
        let items = product.name;
        productList.clothing.push(items);
    }
}
console.log(productList.electronics[1]);
console.log(productList.clothing);
