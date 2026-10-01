/* ==========================================================
   AOTEAROA ADVENTURE GEAR
   HOME PAGE JAVASCRIPT
   ========================================================== */


/* ==========================================================
   TASK 2 FUNCTION:
   FANCY FLOATING ANCHOR
   ========================================================== */

const floatingAnchor = document.getElementById("floatingAnchor");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        floatingAnchor.classList.add("show");

    } else {

        floatingAnchor.classList.remove("show");

    }

});


floatingAnchor.addEventListener("click", function (event) {

    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});