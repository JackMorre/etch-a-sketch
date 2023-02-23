let container = document.querySelector(".main-container");
const btn = document.querySelector(".btn");
let count = 0;

const randomNumber = function () {
	let randomNum = Math.floor(Math.random() * 255);
	if (count === 0) {
		return randomNum;
	} else if (count > 0 && count < 250) {
		return randomNum - count;
	} else if (count >= 250) {
		count = 250;
		randomNum = 0;
		return randomNum;
	}
};

console.log(randomNumber());

function makeRows(rows, cols) {
	container.style.setProperty("--grid-rows", rows);
	container.style.setProperty("--grid-cols", cols);
	for (c = 0; c < rows * cols; c++) {
		let cell = document.createElement("div");
		cell.addEventListener("mouseover", function () {
			cell.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
			count += 10;
		});
		container.appendChild(cell).className = "grid-item";
	}
}

makeRows(16, 16);

const promptForNum = function () {
	const number = prompt(
		"What size do you want your grid to be? Needs to be less than 100 and higher than 0"
	);
	return number;
};

const deleteGrid = function () {
	container.remove();
	const elemDiv = document.createElement("div");
	elemDiv.classList.add("main-container");
	// document.body.appendChild(elemDiv);
	btn.insertAdjacentElement("afterend", elemDiv);
	container = document.querySelector(".main-container");
};

const createNewGrid = function () {
	const number = promptForNum();
	if (number >= 100 || number <= 0) {
		alert("incorrect number, please click okay and try again");
		createNewGrid();
	} else {
		deleteGrid();
		// prettier-ignore
		const size = 960 / number;
		container.style.setProperty("--height", `${size}px`);
		makeRows(number, number);
		count = 0;
	}
};

btn.addEventListener("click", createNewGrid);

// const cellEl = document.querySelectorAll(".grid-item")
// cellEl.forEach(cell => {
//     cell.addEventListener('mouseover', function() {
// 		    cell.style.backgroundColor = "blue"
// 		})
// })
