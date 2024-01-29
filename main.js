const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
form.onsubmit = function (event) {
	event.preventDefault();

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);
};
