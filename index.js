var player1Score = Math.floor(Math.random() * 6) + 1;
var scoreImage1 = "images/dice" + player1Score + ".png";
document.querySelectorAll('img')[0].setAttribute("src", scoreImage1);

var player2Score = Math.floor(Math.random() * 6) + 1;
var scoreImage2 = "images/dice" + player2Score + ".png";
document.querySelectorAll('img')[1].setAttribute("src", scoreImage2);


if (player1Score > player2Score) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (player1Score < player2Score) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
