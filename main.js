const area = document.querySelector(".area");
let move = 0;

area.addEventListener("click", function (e) {
  if (move % 2 === 0) {
    e.target.innerHTML = "X";
  } else {
    e.target.innerHTML = "0";
  }
  check();
  move++;
});

function check() {
  const boxes = document.getElementsByClassName("box");
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  // console.log(boxes);
  for (let i = 0; i < winCombinations.length; i++) {
    if (
      boxes[winCombinations[i][0]].innerHTML === "X" &&
      boxes[winCombinations[i][1]].innerHTML === "X" &&
      boxes[winCombinations[i][2]].innerHTML === "X"
    ) {
      alert("Виграли Хрестики!");
    } else if (
      boxes[winCombinations[i][0]].innerHTML === "0" &&
      boxes[winCombinations[i][1]].innerHTML === "0" &&
      boxes[winCombinations[i][2]].innerHTML === "0"
    ) {
      alert("Виграли Нулики!");
    }
  }
}
