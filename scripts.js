//Array for keeping track of values in boxes
arrValues = new Array(64).fill(null);

//Variable for keeping track of the turn
var turn = "X";

//Function for updating boxes
const whenClicked = (id) => {
  if (arrValues[id] != "X" && arrValues[id] != "O") {
    if (calculateWinner(arrValues)) {
      return;
    }
    document.getElementById(id).innerHTML = turn;
    squareID = document.getElementById(id);
    arrValues[id] = turn;

    const winner = calculateWinner(arrValues);
    if (winner) {
      document.getElementById("turnText").innerHTML = "Winner:";
      document.getElementById(winner[0]).style.color = "Red";
      document.getElementById(winner[1]).style.color = "Red";
      document.getElementById(winner[2]).style.color = "Red";
      document.getElementById(winner[3]).style.color = "Red";
    } else {
      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      document.getElementById("turnTracker").innerHTML = turn;
    }
  }
};

//Reset function
const Reset = () => {
  const winner = calculateWinner(arrValues);
  if (winner) {
    document.getElementById(winner[0]).style.color = "Black";
    document.getElementById(winner[1]).style.color = "Black";
    document.getElementById(winner[2]).style.color = "Black";
    document.getElementById(winner[3]).style.color = "Black";
  }
  for (let i = 0; i < 64; i++) {
    document.getElementById(i).innerHTML = "";
  }
  arrValues.fill(null);
  turn = "X";
  document.getElementById("turnTracker").innerHTML = turn;
  document.getElementById("turnText").innerHTML = "Turn: ";
};

//Function for calculating who wins
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [32, 33, 34, 35],
    [36, 37, 38, 39],
    [40, 41, 42, 43],
    [44, 45, 46, 47],
    [48, 49, 50, 51],
    [52, 53, 54, 55],
    [56, 57, 58, 59],
    [60, 61, 62, 63],
    [0, 4, 8, 12],
    [16, 20, 24, 28],
    [32, 36, 40, 44],
    [48, 52, 56, 60],
    [1, 5, 9, 13],
    [17, 21, 25, 29],
    [33, 37, 41, 45],
    [49, 53, 57, 61],
    [2, 6, 10, 14],
    [18, 22, 26, 30],
    [34, 38, 42, 46],
    [50, 54, 58, 62],
    [3, 7, 11, 15],
    [19, 23, 27, 31],
    [35, 39, 43, 47],
    [51, 55, 59, 63],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
    [16, 21, 26, 31],
    [19, 22, 25, 28],
    [32, 37, 42, 47],
    [35, 38, 41, 44],
    [48, 53, 58, 63],
    [51, 54, 57, 60],
    [0, 16, 32, 48],
    [1, 17, 33, 49],
    [2, 18, 34, 50],
    [3, 19, 35, 51],
    [4, 20, 36, 52],
    [5, 21, 37, 53],
    [6, 22, 38, 54],
    [7, 23, 39, 55],
    [8, 24, 40, 56],
    [9, 25, 41, 57],
    [10, 26, 42, 58],
    [11, 27, 43, 59],
    [12, 28, 44, 60],
    [13, 29, 45, 61],
    [14, 30, 46, 62],
    [15, 31, 47, 63],
    [0, 17, 34, 51],
    [3, 18, 33, 48],
    [4, 21, 38, 55],
    [7, 22, 37, 52],
    [8, 25, 42, 59],
    [11, 26, 41, 56],
    [12, 29, 46, 63],
    [15, 30, 45, 60],
    [0, 21, 42, 63],
    [3, 22, 41, 60],
    [0, 20, 40, 60],
    [1, 21, 41, 61],
    [2, 22, 42, 62],
    [3, 23, 43, 63],
    [15, 26, 37, 48],
    [12, 25, 38, 51],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return lines[i];
    }
  }
  return null;
}
