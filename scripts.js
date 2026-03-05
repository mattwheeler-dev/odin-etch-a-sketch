const colorPicker = document.querySelector('#color-picker');
const solidBtn = document.querySelector('#solid-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const modeBtns = [solidBtn, rainbowBtn, eraserBtn];
const clearBtn = document.querySelector('#clear-btn');
const gridSize = document.querySelector('#grid-size');
const newGridBtn = document.querySelector('#new-grid-btn');
const gridRange = document.querySelector('#grid-range');
const grid = document.querySelector('#grid');

const newGrid = (size = 16) => {
	grid.replaceChildren();
	for (let i = 0; i < size * size; i++) {
		const box = document.createElement('div');
		box.classList.add('box');
		box.style.width = `${100 / size}%`;
		box.style.height = `${100 / size}%`;
		grid.appendChild(box);
		box.addEventListener('mouseover', (e) => {
			if (solidBtn.classList.contains('active')) {
				e.target.style.backgroundColor = colorPicker.value;
			} else if (rainbowBtn.classList.contains('active')) {
				e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
			} else if (eraserBtn.classList.contains('active')) {
				e.target.style.backgroundColor = 'transparent';
			}
		});
	}
	gridSize.textContent = `${size} x ${size}`;
};

const setMode = (mode = 'solid') => {
	modeBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			setMode(btn.id.split('-')[0]);
		});
		if (btn.id === `${mode}-btn`) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}
	});
};

const clearGrid = () => {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.style.backgroundColor = 'transparent';
	});
};

clearBtn.addEventListener('click', clearGrid);
gridRange.addEventListener('input', () => {
	gridSize.textContent = `${gridRange.value} x ${gridRange.value}`;
});
newGridBtn.addEventListener('click', () => newGrid(gridRange.value));

setMode();
newGrid();

const footer = document.querySelector('footer p');
const year = new Date().getFullYear();
footer.textContent = `© ${year} mattwheeler-dev`;
