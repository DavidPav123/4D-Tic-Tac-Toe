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
      document.getElementById("turnText").innerHTML = "Winner: ";
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
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a];
    }
  }
  return null;
}
