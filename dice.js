function dado() {
    var randomNumber1 = RandomInt(1,6);
    var randomNumber2 = RandomInt(1,6);

    switch (randomNumber1){
        case 1:
            document.getElementById("img1").src = "images/dice1.png";
            break;
        case 2:
            document.getElementById("img1").src = "images/dice2.png";
            break;
        case 3:
            document.getElementById("img1").src = "images/dice3.png";
            break;
        case 4:
            document.getElementById("img1").src = "images/dice4.png";
            break;
        case 5:
            document.getElementById("img1").src = "images/dice5.png";
            break;
        case 6:
            document.getElementById("img1").src = "images/dice6.png";
            break;
        default:
            window.alert("Algo está mal");
            break;
    }

    switch (randomNumber2){
        case 1:
            document.getElementById("img2").src = "images/dice1.png";
            break;
        case 2:
            document.getElementById("img2").src = "images/dice2.png";
            break;
        case 3:
            document.getElementById("img2").src = "images/dice3.png";
            break;
        case 4:
            document.getElementById("img2").src = "images/dice4.png";
            break;
        case 5:
            document.getElementById("img2").src = "images/dice5.png";
            break;
        case 6:
            document.getElementById("img2").src = "images/dice6.png";
            break;
        default:
            window.alert("Algo está mal");
            break;
    }

    return quienGano(randomNumber1,randomNumber2);
}

function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quienGano(num1,num2){
    if(num1>num2){
        document.getElementById("winner").textContent = "Player 1 Wins!";
    }else if(num2>num1){
        document.getElementById("winner").textContent = "Player 2 Wins!";
    }else{
        document.getElementById("winner").textContent = "Draw!";
    }

    return 0;
}
