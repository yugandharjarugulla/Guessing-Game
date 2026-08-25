let x = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    let y = Number(document.getElementById("guess").value);

    if (y < 1 || y > 100) {
        document.getElementById("result").innerHTML =
            "The guess number must be between 1 and 100.";
    }

    else if (x === y) {
        document.getElementById("result").innerHTML =
            "You are Genius, Fabulous Guess!!!";
    }

    else if (x > y) {
        document.getElementById("result").innerHTML =
            "Your guess is low, Try again.";
    }

    else {
        document.getElementById("result").innerHTML =
            "Your guess is high, Try again.";
    }

    document.getElementById("number").innerHTML =
        "System Random Number: " + x;
}
