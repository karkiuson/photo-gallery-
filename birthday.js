
function checkAnswer(choice) {

    const result = document.getElementById("result");

    const today = new Date();

    const month = today.getMonth() + 1;
    const day = today.getDate();

    // November 19
    const isBirthday = month === 11 && day === 19;

    if (choice === "birthday") {

        if (isBirthday) {
            result.innerHTML =
                "🎂 MY BIRTHDAY IS TODAY! 🎉<br>You got it right!";
        } else {
            result.innerHTML =
                "Not today! 😏<br>My birthday is November 19.";
        }

    }

    else if (choice === "gta") {

        if (isBirthday) {
            result.innerHTML =
                "🎮 Today is GTA 6!<br>But you missed something...<br>IT'S MY BIRTHDAY TOO! 🎂";
        } else {
            result.innerHTML =
                "🎮 GTA 6? Interesting choice!";
        }

    }

    else if (choice === "world") {

        result.innerHTML =
            "🌍 Yes, it's World Toilet Day!<br>But did you forget something?";
    }

    else if (choice === "none") {

        if (isBirthday) {
            result.innerHTML =
                "😑 NOTHING SPECIAL?<br>Seriously? It's MY BIRTHDAY! 🎂";
        } else {
            result.innerHTML =
                "Maybe you're right... or maybe you missed something! 👀";
        }

    }

}

