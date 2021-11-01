function addToCart(quantity,productName= "Elma") {
    console.log("Sepete eklendi : " + productName + " adet : "+quantity)
}
//addToCart()
addToCart(10)

let sayHello = () =>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function (){
    console.log("Hello World! 2 ")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice){
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {
    productName: "Elma",
    quantity: 5,
    unitPrice: 10
}
function addToCart3(product) {
    console.log("Ürün : "+ product.productName+ 
    " Adet : "+product.quantity+ 
    " Fiyatı: "+product.unitPrice)
}

addToCart3(product1)