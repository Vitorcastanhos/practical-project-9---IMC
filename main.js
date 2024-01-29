const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const modal = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const closeButton = document.querySelector(".close");

// Attach event listener to form submission
form.onsubmit = function (event) {
	event.preventDefault(); // Prevent default form submission
	handleModal(); // Open the modal

	// Get weight and height from input fields
	const weight = Number(inputWeight.value);
	const height = Number(inputHeight.value);

	// Calculate BMI using weight and height
	const bmi = calculateBMI(weight, height);

	// Display the BMI calculation result in the modal
	modalMessage.innerText = `Your BMI is ${bmi}`;
};
/**
 * Calculate the Body Mass Index (BMI) using the weight and height.
 *
 * @param {number} weight - The weight in kilograms
 * @param {number} height - The height in centimeters
 * @returns {string} - The calculated BMI as a string with 2 decimal places
 */
function calculateBMI(weight, height) {
	const bmi = (weight / (height / 100) ** 2).toFixed(2);
	return bmi;
}
/**
 * Toggles the visibility of the modal
 */
function toggleModalVisibility() {
	const modal = document.querySelector(".modal-wrapper");
	modal.classList.toggle("open");
}
// Attach a click event handler to the closeButton element
closeButton.onclick = function () {
	// Call the handleModal function when the closeButton is clicked
	handleModal();
};
