/* const precioOriginal = 100; 

const descuento = 15;  */

const coupons = [ 
    "Cupon 1",
    "Cupon 2",
    "Cupon 3"
];








function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
}



function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value; 

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "Cupon 1": 
            descuento = 15;
        break;
        case "Cupon 2":
            descuento = 30;
        break;
        case "Cupon 3":
            descuento = 25;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;



}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value; 

    
    
    

}  */
/* console.log({
    precioOriginal,
    descuento,
    procentajePrecioConDescuento,
    precioConDescuento,

}); */