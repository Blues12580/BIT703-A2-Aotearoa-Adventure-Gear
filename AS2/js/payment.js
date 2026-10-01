/* ==========================================================
   AOTEAROA ADVENTURE GEAR
   PAYMENT PAGE JAVASCRIPT
   ========================================================== */


/* Retrieve checkout values */

const paymentSubtotal =
    Number(localStorage.getItem("cartSubtotal"));

const paymentShipping =
    Number(localStorage.getItem("shippingCost"));

const paymentTotal =
    Number(localStorage.getItem("orderTotal"));


/* Find payment summary elements */

const paymentSubtotalDisplay =
    document.getElementById("paymentSubtotal");

const paymentShippingDisplay =
    document.getElementById("paymentShipping");

const paymentTotalDisplay =
    document.getElementById("paymentTotal");


/* Display subtotal */

if (paymentSubtotalDisplay) {

    paymentSubtotalDisplay.textContent =
        "$" + paymentSubtotal.toFixed(2);

}


/* Display shipping */

if (paymentShippingDisplay) {

    if (paymentShipping === 0) {

        paymentShippingDisplay.textContent =
            "FREE";

    } else {

        paymentShippingDisplay.textContent =
            "$" + paymentShipping.toFixed(2);

    }

}


/* Display total */

if (paymentTotalDisplay) {

    paymentTotalDisplay.textContent =
        "$" + paymentTotal.toFixed(2);

}

/* ==========================================================
   TASK 3 - PAYMENT FORM VALIDATION
   ========================================================== */

const paymentForm =
    document.getElementById("paymentForm");

const expiryDate =
    document.getElementById("expiryDate");


/* ==========================================================
   CHECK CARD EXPIRY DATE
   ========================================================== */

function validateExpiryDate() {

    if (!expiryDate.value) {

        expiryDate.setCustomValidity(
            "Please select an expiry date."
        );

        return false;
    }


    const today =
        new Date();

    const currentYear =
        today.getFullYear();

    const currentMonth =
        today.getMonth() + 1;


    const selectedParts =
        expiryDate.value.split("-");

    const selectedYear =
        Number(selectedParts[0]);

    const selectedMonth =
        Number(selectedParts[1]);


    if (
        selectedYear < currentYear ||
        (
            selectedYear === currentYear &&
            selectedMonth < currentMonth
        )
    ) {

        expiryDate.setCustomValidity(
            "The expiry date cannot be in the past."
        );

        return false;

    }


    expiryDate.setCustomValidity("");

    return true;
}


/* Recheck whenever expiry changes */

expiryDate.addEventListener(
    "change",
    validateExpiryDate
);


/* ==========================================================
   PAYMENT FORM SUBMISSION
   ========================================================== */

paymentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        validateExpiryDate();


        if (!paymentForm.checkValidity()) {

            event.stopPropagation();

            paymentForm.classList.add(
                "was-validated"
            );

            return;
        }


        paymentForm.classList.add(
            "was-validated"
        );


        /*
           Prototype only.
           No real payment is processed.
        */

        alert(
            "Order successfully submitted. " +
            "This is a website prototype only."
        );

    }
);