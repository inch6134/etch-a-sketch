// Create grid element into canvas
const canvasDOM = document.querySelector("#canvas");
const sliderDOM = document.querySelector("input");
const sliderPane = document.querySelector("#slider-pane");
const clearButton = document.querySelector("#clear");
const colorSelector = document.querySelector("#color-selector");

let sliderValue = undefined;
let gridSquares = [];
let color = "";

initialize();

function initialize() {
  sliderValue = sliderDOM.value;
  generateGrid();
  sliderPane.innerHTML = `${sliderValue} x ${sliderValue}`;
  let style = getComputedStyle(colorSelector);
  color = style.getPropertyValue("background-color");
}

console.log(color);

// utility functions

function generateGrid() {
  gridSquares.length = 0;
  empty(canvasDOM);
  for (let i = 0; i < sliderValue; i++) {
    gridSquares[i] = [];
    for (let j = 0; j < sliderValue; j++) {
      const grid = document.createElement("div");
      grid.style.width = `${canvasDOM.clientWidth / sliderValue}px`;
      grid.style.height = `${canvasDOM.clientHeight / sliderValue}px`;
      grid.setAttribute("class", "grid-square");
      canvasDOM.append(grid);
      gridSquares[i][j] = grid;
    }
  }
  enableEditing();
}

function empty(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

function setValue() {
  sliderValue = sliderDOM.value;
  sliderPane.innerHTML = `${sliderValue} x ${sliderValue}`;
}

// event listeners

clearButton.addEventListener("click", generateGrid);

sliderDOM.addEventListener("input", setValue);

sliderDOM.addEventListener("mouseup", () => {
  setValue();
  generateGrid();
});

function enableEditing() {
  gridSquares.forEach((row) => {
    row.forEach((column) => {
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = color;
      });
    });
  });
}
