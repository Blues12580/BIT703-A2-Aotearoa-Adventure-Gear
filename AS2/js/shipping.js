/* ==========================================================
   AOTEAROA ADVENTURE GEAR
   SHIPPING PAGE JAVASCRIPT
   ========================================================== */


/* ==========================================================
   GET CART SUBTOTAL
   ========================================================== */

/*
   Retrieve the subtotal saved by cart.js.

   If there is no stored subtotal, use 448 as
   a temporary fallback value.
*/

let orderSubtotal =
    Number(localStorage.getItem("cartSubtotal"));

if (
    isNaN(orderSubtotal) ||
    orderSubtotal <= 0
) {

    orderSubtotal = 448;

}


/* ==========================================================
   SHIPPING SETTINGS
   ========================================================== */

const freeShippingThreshold = 600;

const standardShippingCost = 25;


/* ==========================================================
   PAGE ELEMENTS
   ========================================================== */

const subtotalDisplay =
    document.getElementById("shippingSubtotal");

const shippingDisplay =
    document.getElementById("shippingCost");

const totalDisplay =
    document.getElementById("shippingTotal");

const shippingMessage =
    document.getElementById("shippingMessage");

const freeShippingOffer =
    document.getElementById("freeShippingOffer");


/* ==========================================================
   CALCULATE SHIPPING
   ========================================================== */

function calculateShipping() {

    let shippingCost;


    /*
       Assessment requirement:
       orders OVER $600 receive free shipping.
    */

    if (orderSubtotal > freeShippingThreshold) {

        shippingCost = 0;

        shippingDisplay.textContent =
            "FREE";

        shippingMessage.textContent =
            "You qualify for free standard shipping.";

        freeShippingOffer.classList.add(
            "free-shipping-success"
        );

    } else {

        shippingCost =
            standardShippingCost;

        shippingDisplay.textContent =
            "$" + shippingCost.toFixed(2);


        /*
           Calculate how much more the customer
           needs to spend to EXCEED $600.
        */

        const amountRemaining =
            (freeShippingThreshold - orderSubtotal) + 0.01;


        shippingMessage.textContent =
            "Spend $" +
            amountRemaining.toFixed(2) +
            " more to qualify for free standard shipping.";


        freeShippingOffer.classList.remove(
            "free-shipping-success"
        );

    }


    const finalTotal =
        orderSubtotal + shippingCost;


    subtotalDisplay.textContent =
        "$" + orderSubtotal.toFixed(2);

    totalDisplay.textContent =
        "$" + finalTotal.toFixed(2);


    /*
       Save values for the payment page.
    */

    localStorage.setItem(
        "shippingCost",
        shippingCost.toFixed(2)
    );

    localStorage.setItem(
        "orderTotal",
        finalTotal.toFixed(2)
    );

}


/* Run automatically */

calculateShipping();

/* ==========================================================
   TASK 3 - SHIPPING FORM VALIDATION
   ========================================================== */

const shippingForm =
    document.getElementById("shippingForm");


shippingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Check HTML5 validation rules */

        if (!shippingForm.checkValidity()) {

            event.stopPropagation();

            shippingForm.classList.add(
                "was-validated"
            );

            return;
        }


        /* Form is valid */

        shippingForm.classList.add(
            "was-validated"
        );


        /* Continue to payment page */

        window.location.href =
            "payment.html";

    }
);