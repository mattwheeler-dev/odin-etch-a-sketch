const container = document.querySelector(".container");
const newGrid = document.querySelector("#new-grid");

// CREATE 16 * 16 GRID (256)
for (i = 0; i < 256; i++) {
	const box = document.createElement("div");

	box.classList.add("box");
	box.addEventListener("mouseover", () => {
		box.style.backgroundColor = "lime";
	});

	container.appendChild(box);
}
