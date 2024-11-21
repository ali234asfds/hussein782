// scripts.js
let cart = [
    
];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  alert(`${productName} تم إضافته إلى السلة`);
  console.log(cart); // لمراجعة محتوى السلة في وحدة التحكم
}
