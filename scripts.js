const container = document.querySelector(".container");
const newGrid = document.querySelector("#new-grid");

// CREATE 16 * 16 GRID (256)
for (i = 0; i < 256; i++) {
	const box = document.createElement("div");

	box.classList.add("box");

	// HOVER EFFECT FOR BOXES
	box.addEventListener("mouseover", () => {
		box.style.backgroundColor = "#fff";
	});

	container.appendChild(box);
}

// NEW GRID BTN & PROMPT
newGrid.addEventListener("click", () => {
	let gridSize = prompt(
		"Please enter the number of squares you would like per side for your new grid. (Max: 64)",
		"10"
	);

	// USE INPUT TO CREATE NEW GRID
	if (gridSize == null || gridSize < 0 || gridSize > 64) {
		alert(
			"Please try again with a number between (but not including) 0 and 65"
		);
	} else if (gridSize != null && 0 < Number(gridSize) < 65) {
		container.replaceChildren();

		// SQUARE INPUT FOR GRID & APPLY SIZING
		for (let i = 0; i < gridSize * gridSize; i++) {
			const box = document.createElement("div");
			box.style.height = `${Math.floor(600 / gridSize)}px`;
			box.style.width = `${Math.floor(600 / gridSize)}px`;
			container.appendChild(box);

			// HOVER EFFECT FOR NEW BOXES
			box.addEventListener("mouseover", () => {
				box.style.backgroundColor = "#fff";
			});
		}
	}
});
