// Show the unique products from an array

let products = ["laptop", "phone", "desktop", "watch", "camera", "laptop", "phone", "desktop", "camera"];
// console.log(products.reverse());

let uProduct = [];
for(let i = 0; i < products.length; i++){
    let product = products[i];
    if(!uProduct.includes(product)){
        uProduct.push(product);
    }
}
console.log(uProduct);