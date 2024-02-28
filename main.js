// Create grid element into canvas
const canvasDOM = document.querySelector("#canvas");
const sliderDOM = document.querySelector("input");
const sliderPane = document.querySelector("#slider-pane");
const clearButton = document.querySelector('#clear');


let sliderValue = sliderDOM.value;
let gridSquares = [];

generateGrid();

function generateGrid () {
  gridSquares.length = 0;
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
}

sliderPane.innerHTML = `${sliderValue} x ${sliderValue}`;

clearButton.addEventListener('click', () => {
  grid.setAttribute("class", "grid-square");
});

// gridSquares[0][0].addEventListener("hover", () => {
//     gridSquares[0][0].removeAttribute("class");
//     gridSquares[0][0].style.backgroundColor = "black";
// });

// event handler for drawing on tiles
// for (let i = 0; i < sliderValue; i++) {
//   for (let j = 0; j < sliderValue; j++) {
//     const square = gridSquares[i][j];
//     console.log(square);
//     square.addEventListener("hover", () => {
//       square.removeAttribute("class");
//       square.style.backgroundColor = "black";
//     });
//   }
// }

// canvasDOM.querySelectorAll('div').forEach(element => {
//     element.addEventListener('hover', () => {
//         element.removeAttribute("class");
//         element.style.backgroundColor = "black";
//     })
// })

// event handler for grid size slider

//
