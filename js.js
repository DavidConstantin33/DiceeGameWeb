function randomDice1() {

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageName = 'images/dice' + randomNumber + '.png';

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let imageName2 = 'images/dice' + randomNumber2 + '.png';

    document.querySelector(".img1").setAttribute("src", imageName);

    document.querySelector(".img2").setAttribute("src", imageName2);

    if (randomNumber > randomNumber2) {
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    } else if (randomNumber < randomNumber2) {
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML="It's a Tie!";
    }

}

document.addEventListener('DOMContentLoaded', randomDice1);



