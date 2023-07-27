"use strict";

window.onload = init;

function init() {
    const toCelsiusConverter = document.getElementById("toCelsiusConverter");
    toCelsiusConverter.onclick = onCelsiusConverterClick;
    const toFahrenheitConverter = document.getElementById("toFahrenheitConverter");
    toFahrenheitConverter.onclick = onFahrenheitConverterClick;
    const clear = document.getElementById("clear");
    clear.onclick = onClearClick;
}

// fahrenheit to celsius
function onCelsiusConverterClick() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusConverted = document.getElementById("celsiusConverted");
    const inputError = document.getElementById("inputError");

    inputError.innerHTML = "";

    let fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheit)) {
        celsiusConverted.value = "";
        inputError.innerHTML = `"${fahrenheitInput.value}" is not a number - please clear the form and re-enter a number for the Temperature field`;
        return;
    }

    let celsius = (fahrenheit - 32) * (5 / 9);
    celsiusConverted.value = celsius.toFixed(2);

}

function onFahrenheitConverterClick() {

}

function onClearClick() {

}