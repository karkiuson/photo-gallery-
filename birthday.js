
function checkAnswer(choice) {

    const result = document.getElementById("result");

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const isBirthday = month === 11 && day === 19;

    if (choice === "birthday") {

        result.innerHTML = isBirthday
            ? "🎂 MY BIRTHDAY IS TODAY! 🎉<br>You got it right!"
            : "😏 Not today! My birthday is November 19.";

    }

    else if (choice === "gta") {

        result.innerHTML = isBirthday
            ? "🎮 Today is GTA 6!<br>But you missed something...<br>IT'S MY BIRTHDAY TOO! 🎂"
            : "🎮 GTA 6? Interesting choice!";

    }

    else if (choice === "world") {

        result.innerHTML =
            "🌍 World Toilet Day!<br>But did you forget something special?";

    }

    else if (choice === "none") {

        result.innerHTML = isBirthday
            ? "😑 NOTHING SPECIAL?!<br>IT'S MY BIRTHDAY! 🎂"
            : "👀 Maybe you missed something!";

    }

}
