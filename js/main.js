const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const modal = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const closeButton = document.querySelector(".close");
const error = document.querySelector(".error");

inputWeight.oninput = () => error.classList.remove("open");
inputHeight.oninput = () => error.classList.remove("open");

form.onsubmit = function (event) {
	event.preventDefault();

	const weight = Number(inputWeight.value);
	const height = Number(inputHeight.value);

	if (notANumber(inputWeight.value) || notANumber(inputHeight.value)) {
		return error.classList.add("open");
	} else {
		error.classList.remove("open");
	}

	calculateBMI(weight, height);
	toggleModalVisibility();
};
function notANumber(value) {
	return isNaN(value) || value === "";
}
function calculateBMI(weight, height) {
	const bmi = (weight / (height / 100) ** 2).toFixed(2);

	modalMessage.innerText = `Your BMI is ${bmi}`;
	return bmi;
}
function toggleModalVisibility() {
	const modal = document.querySelector(".modal-wrapper");
	modal.classList.toggle("open");
}
closeButton.onclick = function () {
	toggleModalVisibility();
};
window.addEventListener("keydown", function (event) {
	if (event.key == "Escape") {
		modal.classList.remove("open");
	}
});
