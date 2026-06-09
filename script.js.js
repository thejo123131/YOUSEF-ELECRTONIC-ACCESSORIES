let cart = [];

/* المنتجات */
const products = [
{
id:1,
name:"Joyroom Car Charger USB + Type-C",
price:150,
image:"1.jpg",
category:"Chargers"
},
{
id:2,
name:"Joyroom Mini Car Charger",
price:180,
image:"2.jpg",
category:"Chargers"
},
{
id:3,
name:"Oraimo Car Charger",
price:220,
image:"3.jpg",
category:"Chargers"
},
{
id:4,
name:"Joyroom Car Phone Holder",
price:300,
image:"4.jpg",
category:"Holders"
},
{
id:5,
name:"Metal Desktop Phone Stand",
price:120,
image:"5.jpg",
category:"Holders"
},
{
id:6,
name:"Flexible Mobile Holder",
price:170,
image:"6.jpg",
category:"Holders"
},
{
id:7,
name:"Joyroom Fast Car Charger",
price:200,
image:"7.jpg",
category:"Chargers"
},
{
id:8,
name:"Power Bank",
price:450,
image:"8.jpg",
category:"Power Banks"
},
{
id:9,
name:"Power Bank 10000mAh",
price:500,
image:"9.jpg",
category:"Power Banks"
},
{
id:10,
name:"HIKSEMI Flash Drive",
price:150,
image:"10.jpg",
category:"Flash Drives"
},
{
id:11,
name:"Kingston Flash 64GB",
price:250,
image:"11.jpg",
category:"Flash Drives"
},
{
id:12,
name:"HIKSEMI Flash 8GB",
price:130,
image:"12.jpg",
category:"Flash Drives"
},
{
id:13,
name:"HIKSEMI Flash 16GB",
price:170,
image:"13.jpg",
category:"Flash Drives"
},
{
id:14,
name:"Power Bank 10000mAh",
price:450,
image:"14.jpg",
category:"Power Banks"
},
{
id:15,
name:"Choetech 22.5W Power Bank",
price:650,
image:"15.jpg",
category:"Power Banks"
},
{
id:16,
name:"Power Bank 10000mAh Digital",
price:550,
image:"16.jpg",
category:"Power Banks"
},
{
id:17,
name:"WIWU Power Bank",
price:500,
image:"17.jpg",
category:"Power Banks"
},
{
id:18,
name:"45W Fast Charger",
price:300,
image:"18.jpg",
category:"Chargers"
},
{
id:19,
name:"Oraimo 20W Charger",
price:320,
image:"19.jpg",
category:"Chargers"
},
{
id:20,
name:"45W PD Adapter",
price:420,
image:"20.jpg",
category:"Chargers"
},
{
id:21,
name:"25W Type-C Charger",
price:230,
image:"21.jpg",
category:"Chargers"
},
{
id:22,
name:"4 in 1 Spring Cable",
price:170,
image:"22.jpg",
category:"Cables"
},
{
id:23,
name:"Joyroom 4 in 1 Cable",
price:250,
image:"23.jpg",
category:"Cables"
},
{
id:24,
name:"Joyroom Micro USB Cable",
price:130,
image:"24.jpg",
category:"Cables"
},
{
id:25,
name:"PD 27W Max Fast Charging Cable",
price:180,
image:"25.jpg",
category:"Cables"
}
];

/* عرض المنتجات */

function displayProducts(list = products){

const container =
document.getElementById("products");

container.innerHTML = "";

list.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}"
alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.price} EGP</p>

<div class="product-buttons">

<button
class="order-btn"
onclick="orderNow(${product.id})">
Order Now
</button>

<button
class="add-btn"
onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>

`;

});

}

/* فلترة */

function filterCategory(category){

const filtered =
products.filter(
p=>p.category===category
);

displayProducts(filtered);

}

/* إضافة للسلة */

function addToCart(id){

const existing =
cart.find(item=>item.id===id);

if(existing){

existing.quantity++;

}else{

const product =
products.find(p=>p.id===id);

cart.push({
...product,
quantity:1
});

}

updateCart();

}

/* زيادة */

function increaseQuantity(id){

const item =
cart.find(p=>p.id===id);

if(item){

item.quantity++;

}

updateCart();

}

/* تقليل */

function decreaseQuantity(id){

const item =
cart.find(p=>p.id===id);

if(!item) return;

item.quantity--;

if(item.quantity <= 0){

cart =
cart.filter(
p=>p.id!==id
);

}

updateCart();

}

/* تحديث السلة */

function updateCart(){

const cartItems =
document.getElementById("cart-items");

const cartCount =
document.getElementById("cart-count");

const cartTotal =
document.getElementById("cart-total");

let total = 0;
let count = 0;

cartItems.innerHTML = "";

cart.forEach(item=>{

total +=
item.price * item.quantity;

count += item.quantity;

cartItems.innerHTML += `

<div class="cart-item">

<strong>${item.name}</strong>

<p>${item.price} EGP</p>

<div class="qty-controls">

<button
onclick="decreaseQuantity(${item.id})">
-
</button>

<span>${item.quantity}</span>

<button
onclick="increaseQuantity(${item.id})">
+
</button>

</div>

</div>

`;

});

cartCount.innerText = count;
cartTotal.innerText = total;

}

/* شراء مباشر */

function orderNow(id){

cart = [];

const product =
products.find(
p=>p.id===id
);

cart.push({
...product,
quantity:1
});

updateCart();

showOrderForm();

}

/* السلة */

function toggleCart(){

document
.getElementById("cart-sidebar")
.classList.toggle("active");

}

/* نموذج الطلب */

function showOrderForm(){

document
.getElementById("orderModal")
.style.display = "block";

}

/* ملاحظة الدفع */

function togglePaymentNote(){

const method =
document.getElementById(
"paymentMethod"
).value;

const note =
document.getElementById(
"payment-note"
);

if(
method === "Instapay" ||
method === "Vodafone Cash"
){

note.style.display = "block";

}else{

note.style.display = "none";

}

}

/* الثيم */

function setTheme(theme){

document.body.classList.remove(
"white-theme",
"black-theme",
"rgb-theme"
);

if(theme==="white"){

document.body.classList.add(
"white-theme"
);

}

if(theme==="black"){

document.body.classList.add(
"black-theme"
);

}

if(theme==="rgb"){

document.body.classList.add(
"rgb-theme"
);

}

}

/* إرسال الطلب */

function sendOrder(){

    const name =
    document.getElementById("customerName").value;

    const phone =
    document.getElementById("customerPhone").value;

    const address =
    document.getElementById("customerAddress").value;

    const payment =
    document.getElementById("paymentMethod").value;

    if(
        !name ||
        !phone ||
        !address
    ){
        alert("Please fill all fields");
        return;
    }

    let orderDetails = "";

    cart.forEach(item => {

        orderDetails +=
        `${item.name} x${item.quantity}\n`;

    });

    const total =
    cart.reduce(
        (sum,item)=>
        sum + (item.price * item.quantity),
        0
    );

    const message =

`🛒 New Order

Name: ${name}

Phone: ${phone}

Address: ${address}

Payment Method: ${payment}

Products:
${orderDetails}

Total: ${total} EGP`;

    const whatsappURL =

`https://wa.me/201013693032?text=${encodeURIComponent(message)}`;

    alert(
    "✅ Order confirmed!\n📦 Shipping in 3 days."
    );

    window.open(
        whatsappURL,
        "_blank"
    );

}