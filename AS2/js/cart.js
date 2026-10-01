/* ==========================================================
   AOTEAROA ADVENTURE GEAR
   SHOPPING CART JAVASCRIPT
   ========================================================== */

const cartQuantities =
    document.querySelectorAll(".cart-quantity");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartShipping =
    document.getElementById("cartShipping");

const cartTotal =
    document.getElementById("cartTotal");

const standardShipping = 25;


/* ==========================================================
   UPDATE CART TOTALS
   ========================================================== */

function updateCartTotals() {

    let subtotal = 0;

    cartQuantities.forEach(function (quantityInput) {

        const price =
            Number(quantityInput.dataset.price);

        /* Validate product price */
        
        if (isNaN(price) || price < 0) {

            console.error(
                "Invalid product price detected."
            );
            
            return;
        }    

        let quantity =
            Number(quantityInput.value);


        /* Prevent invalid quantities */

        if (quantity < 1 || isNaN(quantity)) {

            quantity = 1;
            quantityInput.value = 1;

        }


        subtotal += price * quantity;

    });


    const total =
        subtotal + standardShipping;


    cartSubtotal.textContent =
        "$" + subtotal.toFixed(2);

    cartShipping.textContent =
        "$" + standardShipping.toFixed(2);

    cartTotal.textContent =
        "$" + total.toFixed(2);


    /*
       Store the subtotal in the browser so that
       shipping.html can retrieve it.
    */

    localStorage.setItem(
        "cartSubtotal",
        subtotal.toFixed(2)
    );

}


/* ==========================================================
   LISTEN FOR QUANTITY CHANGES
   ========================================================== */

cartQuantities.forEach(function (quantityInput) {

    quantityInput.addEventListener(
        "input",
        updateCartTotals
    );

});


/* Calculate when page loads */

updateCartTotals();