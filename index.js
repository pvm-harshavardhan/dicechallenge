// 1st dice

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageName1 = "dice" + randomNumber1 + ".png";

let imagePath1 = 'images/' + randomImageName1;

document.querySelector(".img1").setAttribute("src", imagePath1);

// 2nd dice

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageName2 = "dice" + randomNumber2 + ".png";

let imagePath2 = 'images/' + randomImageName2;

document.querySelector(".img2").setAttribute("src", imagePath2);

// victory declaration

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML="🚩 Draw! 🚩";
}