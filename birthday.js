
function checkAnswer(choice) {

    const result = document.getElementById("result");

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const isBirthday = month === 11 && day === 19;

    if (isBirthday) {

        if (choice === "birthday") {
            result.innerHTML =
                "🎂 MY BIRTHDAY IS TODAY! 🎉<br>You got it right!";
        }

        else if (choice === "gta") {
            result.innerHTML =
                "🎮 Today is GTA 6!<br>But you missed something...<br>🎂 MY BIRTHDAY IS TODAY!";
        }

        else if (choice === "world") {
            result.innerHTML =
                "🌍 World Toilet Day!<br>But today is also MY BIRTHDAY! 🎂";
        }

        else {
            result.innerHTML =
                "🎂 MY BIRTHDAY IS TODAY! 🎉";
        }

    } 
    
    else {

        if (choice === "birthday") {
            result.innerHTML =
                "🎂 MY BIRTHDAY IS TODAY! 🎉";
        }

        else if (choice === "gta") {
            result.innerHTML =
                "🎮 GTA 6? Interesting choice!";
        }

        else if (choice === "world") {
            result.innerHTML =
                "🌍 World Toilet Day!";
        }

        else {
            result.innerHTML =
                "👀 Maybe you missed something!";
        }

    }

}
