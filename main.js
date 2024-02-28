// Create grid element into canvas
const canvasDOM = document.querySelector("#canvas");
const sliderDOM = document.querySelector("input");
const sliderPane = document.querySelector("#slider-pane");
const clearButton = document.querySelector('#clear');

let sliderValue = undefined;
let gridSquares = [];

initialize();

function initialize() {
  sliderValue = sliderDOM.value;
  generateGrid();
  sliderPane.innerHTML = `${sliderValue} x ${sliderValue}`;
}

// utility functions

function generateGrid () {
  gridSquares.length = 0;
  empty(canvasDOM);
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

function empty(element) {
  while(element.firstElementChild) {
     element.firstElementChild.remove();
  }
}

function setValue() {
  sliderValue = sliderDOM.value;
  sliderPane.innerHTML = `${sliderValue} x ${sliderValue}`;  
}

// event listeners

clearButton.addEventListener('click', generateGrid);

sliderDOM.addEventListener('input', setValue);

sliderDOM.addEventListener('mouseup', () => {
  setValue();
  generateGrid();
})

gridSquares.forEach((row) => {
  row.forEach((column) => {
    column.addEventListener('mouseover', () => {
      column.innerHTML = '';
    });
  });
});

// sliderPane.addEventListener('click', () => {
//   sliderPane.innerHTML = sliderPaneInput;
// });

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
