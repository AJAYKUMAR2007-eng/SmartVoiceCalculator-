document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });

        });
    }


    /* =========================
       DEMO CALCULATOR
    ========================= */

    const demoResult = document.getElementById("demoResult");
    const calculatorButtons =
        document.querySelectorAll(".calculator-buttons button");

    const clearDemo =
        document.getElementById("clearDemo");

    const voiceDemo =
        document.getElementById("voiceDemo");

    let expression = "";


    function updateDisplay(value) {

        if (!demoResult) {
            return;
        }

        demoResult.textContent = value || "0";
    }


    calculatorButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const value = button.getAttribute("data-value");

            if (!value) {
                return;
            }

            expression += value;

            updateDisplay(expression);
        });

    });


    /* =========================
       CLEAR BUTTON
    ========================= */

    if (clearDemo) {

        clearDemo.addEventListener("click", function () {

            expression = "";

            updateDisplay("0");

        });

    }


    /* =========================
       VOICE DEMO
    ========================= */

    if (voiceDemo) {

        voiceDemo.addEventListener("click", function () {

            if (!("speechSynthesis" in window)) {

                alert(
                    "Voice output is not supported in this browser."
                );

                return;
            }

            const message =
                "Smart Voice Calculator. " +
                "You can perform calculations using your voice.";

            const speech =
                new SpeechSynthesisUtterance(message);

            speech.lang = "en-US";

            window.speechSynthesis.speak(speech);

        });

    }


    /* =========================
       YEAR
    ========================= */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =========================
       CLOSE MENU WHEN CLICKING
       OUTSIDE
    ========================= */

    document.addEventListener("click", function (event) {

        if (!navMenu || !menuBtn) {
            return;
        }

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {
            navMenu.classList.remove("active");
        }

    });

});
