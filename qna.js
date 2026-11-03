
const answers = {
    q1: "yes",
    q2: "no",
    q3: "no",
    q4: "yes",
    q5: "no"
};

const form = document.getElementById("quizForm");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retryBtn");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;

    for (let i = 1; i <= 5; i++) {
        const question = "q" + i;
        const selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        const result = document.getElementById("result" + i);

        if (selected.value === answers[question]) {
            score++;

            result.textContent = "✓ Correct answer!";
            result.className = "correct";

        } else {
            result.textContent =
                "✗ Wrong! Correct answer: " +
                answers[question].toUpperCase();

            result.className = "wrong";
        }
    }

    scoreDisplay.textContent =
        "Your Score: " + score + " / 5";

    retryBtn.classList.remove("hidden");
});

retryBtn.addEventListener("click", function() {
    form.reset();

    for (let i = 1; i <= 5; i++) {
        const result = document.getElementById("result" + i);
        result.textContent = "";
        result.className = "";
    }

    scoreDisplay.textContent = "";
    retryBtn.classList.add("hidden");
});
