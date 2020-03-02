var plusBtn = document.getElementsByClassName("plusBtn");
var minusBtn = document.getElementsByClassName("minusBtn");
var inputBox = document.getElementsByClassName("inputBox");
var price = document.getElementsByClassName("price");
var removeItem = document.getElementsByClassName("removeItem");
var cartItem = document.getElementsByClassName("cartItem");
var subTotal = document.getElementById("subTotal");
var total = document.getElementById("total");
var wholeCartBox = document.getElementById("wholeCartBox");


// First Cart Item
plusBtn[0].addEventListener("click", function() {
    inputBox[0].value = ++inputBox[0].value;
    price[0].innerText = parseFloat(price[0].innerText) + 1219;
    subTotal.innerText = parseFloat(subTotal.innerText) + 1219;
    total.innerText = parseFloat(total.innerText) + 1219;
});

minusBtn[0].addEventListener("click", function() {
    if (inputBox[0].value > 1) {
        inputBox[0].value = inputBox[0].value - 1;
        price[0].innerText = parseFloat(price[0].innerText) - 1219;
        subTotal.innerText = parseFloat(subTotal.innerText) - 1219;
        total.innerText = parseFloat(total.innerText) - 1219;
    }

});




// Second Cart Item
plusBtn[1].addEventListener("click", function() {
    inputBox[1].value = ++inputBox[1].value;
    price[1].innerText = parseFloat(price[1].innerText) + 59;
    subTotal.innerText = parseFloat(subTotal.innerText) + 59;
    total.innerText = parseFloat(total.innerText) + 59;
});

minusBtn[1].addEventListener("click", function() {
    if (inputBox[1].value > 1) {
        inputBox[1].value = inputBox[1].value - 1;
        price[1].innerText = parseFloat(price[1].innerText) - 59;
        subTotal.innerText = parseFloat(subTotal.innerText) - 59;
        total.innerText = parseFloat(total.innerText) - 59;
    }

});




// Remove First Cart Item
removeItem[0].addEventListener("click", function() {
    cartItem[0].style.display = "none";
    subTotal.innerText = price[1].innerText;
    total.innerText = price[1].innerText;

    if (cartItem[0].style.display == "none" && cartItem[1].style.display == "none") {
        wholeCartBox.innerHTML = "<h2 class='emptyCartNotice'>Cart is Empty !!!</h2>";
    }
});

// Remove Second Cart Item
removeItem[1].addEventListener("click", function() {
    cartItem[1].style.display = "none";
    subTotal.innerText = price[0].innerText;
    total.innerText = price[0].innerText;

    if (cartItem[0].style.display == "none" && cartItem[1].style.display == "none") {
        wholeCartBox.innerHTML = "<h2 class='emptyCartNotice'>Cart is Empty !!!</h2>";
    }
});