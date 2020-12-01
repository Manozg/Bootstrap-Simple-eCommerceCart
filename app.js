
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');

const decreaseNumber = (incdec, itemprice) => {
    var itemVal = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemVal.value)
    if(itemVal.value <= 0) {
        itemVal.value = 0;
        alert('Not valid quantity');
        itemVal.style.background = 'green';
        itemVal.style.color = '#fff';
    } else {
        itemVal.value = parseInt(itemVal.value) - 1;
        itemVal.style.background = '#fff'; //bring back the color to original
        itemVal.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15; //display price item
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15; //total amount
        // shipping_charge.innerHTML = parseInt(product_total_amt.innerHTML) * 0.05;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const increaseNumber = (incdec, itemprice) => {
    var itemVal = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemVal.value)
    if(itemVal.value >= 5) {
        alert('Maximum quantity reached');
        itemVal.style.background = 'red';
        itemVal.style.color = '#fff';
    } else {
        itemVal.value = parseInt(itemVal.value) + 1;
        itemVal.style.background = '#fff'; //bring back the color to original
        itemVal.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15; //display price item
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15; //total amount
        // shipping_charge.innerHTML = parseInt(product_total_amt.innerHTML) * 0.05;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const discount_code = () => {
    let totalAmtCur = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if (discountCode.value ==='MANGHI'){;
    let newTotaAmt = totalAmtCur - (0.1*totalAmtCur);
    total_cart_amt.innerHTML = newTotaAmt;
    error_trw.innerHTML = "Your discount code is accepted"
} else {
    error_trw.innerHTML = "Please try again. The code is MANGHI"
}
}