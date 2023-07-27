"use strict";

window.onload = init;

function init() {
    const toCelsiusConverter = document.getElementById("toCelsiusConverter");
    if (toCelsiusConverter != null) {
        toCelsiusConverter.onclick = onCelsiusConverterClick;
    }
    const toFahrenheitConverter = document.getElementById("toFahrenheitConverter");
    if (toFahrenheitConverter != null) {
        toFahrenheitConverter.onclick = onFahrenheitConverterClick;
    }
    const clearCtoF = document.getElementById("clearCtoF");
    if (clearCtoF != null) {
        clearCtoF.onclick = onClearCtoFClick;
    }

    const clearFtoC = document.getElementById("clearFtoC");
    if (clearFtoC != null) {
        clearFtoC.onclick = onClearFtoCClick;
    }
}

// fahrenheit to celsius
function onCelsiusConverterClick() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusConverted = document.getElementById("celsiusConverted");
    const inputError = document.getElementById("inputError");

    inputError.innerHTML = "";

    let fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheitInput.value) || fahrenheitInput.value == "") {
        celsiusConverted.value = "";
        inputError.innerHTML = `"${fahrenheitInput.value}" is not a number - please clear the form and re-enter a number for the Temperature field`;
        return;
    }

    let celsius = (fahrenheit - 32) * (5 / 9);
    celsiusConverted.value = celsius.toFixed(2);

}


// celsius to fahrenheit
function onFahrenheitConverterClick() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitConverted = document.getElementById("fahrenheitConverted");
    const inputError = document.getElementById("inputError");

    inputError.innerHTML = "";

    let celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsiusInput.value) || celsiusInput.value == "") {
        fahrenheitConverted.value = "";
        inputError.innerHTML = `"${celsiusInput.value}" is not a number - please clear the form and re-enter a number for the Temperature field`;
        return;
    }

    let fahrenheit = celsius * 9 / 5 + 32;
    fahrenheitConverted.value = fahrenheit.toFixed(2);
}

function onClearCtoFClick() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitConverted = document.getElementById("fahrenheitConverted");
    const inputError = document.getElementById("inputError");

    celsiusInput.value = "";
    fahrenheitConverted.value = "";
    inputError.innerHTML = "";
}