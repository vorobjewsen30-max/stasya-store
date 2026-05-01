const API = "https://stasya-store.onrender.com/api";
let cart = [];
async function loadProducts(){const res=await fetch(`${API}/products`);const products=await res.json();const container=document.getElementById("products");products.forEach(p=>{const div=document.createElement("div");div.className="product";div.innerHTML=`<img src="${p.image}" width="100%"/><h3>${p.name}</h3><p>${p.price} ₽</p><button onclick='addToCart(${JSON.stringify(p)})'>Купить</button>`;container.appendChild(div);});}
function addToCart(product){cart.push(product);renderCart();}
function renderCart(){const cartEl=document.getElementById("cart");cartEl.innerHTML="";cart.forEach(item=>{const li=document.createElement("li");li.textContent=`${item.name} - ${item.price} ₽`;cartEl.appendChild(li);});}
async function checkout(){await fetch(`${API}/order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart})});alert("Заказ отправлен!");cart=[];renderCart();}
loadProducts();
