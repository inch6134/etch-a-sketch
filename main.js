// Create grid element into canvas
const canvasDOM = document.querySelector("#canvas");
const sliderDOM = document.querySelector("input");

const sliderValue = sliderDOM.value;
let gridSquares = [];

for (let i = 0; i < sliderValue; i++) {
  gridSquares[i] = [];
  for (let j = 0; j < sliderValue; j++) {
    const grid = document.createElement("div");
    grid.innerHTML = `Grid`;
    grid.style.width = `${canvasDOM.clientWidth / sliderValue}px`;
    grid.style.height = `${canvasDOM.clientHeight / sliderValue}px`;
    grid.setAttribute("class", "grid-square");
    canvasDOM.append(grid);
    gridSquares[i][j] = grid;
  }
}
