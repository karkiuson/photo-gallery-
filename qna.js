
document.addEventListener("DOMContentLoaded", function () {

    // CORRECT ANSWERS
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

    if (!form || !scoreDisplay || !retryBtn) return;

    // SUBMIT QUIZ
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let score = 0;
        let unanswered = false;

        for (let i = 1; i <= 5; i++) {

            const question = "q" + i;

            const selected = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            const result = document.getElementById("result" + i);

            if (!selected) {

                unanswered = true;
                result.textContent = "Please answer this question.";
                result.className = "wrong";

                continue;
            }

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

        if (unanswered) {
            scoreDisplay.textContent =
                "Please answer all five questions!";
            return;
        }

        // FINAL SCORE
        let message = "";

        if (score === 5) {
            message = "Perfect! You know Yushan very well! 💜";
        } else if (score >= 3) {
            message = "Great! You know quite a lot about Yushan!";
        } else if (score >= 1) {
            message = "Not bad! You still have more to learn!";
        } else {
            message = "Looks like you need to know Yushan better!";
        }

        scoreDisplay.textContent =
            "Your Score: " + score + " / 5 — " + message;

        retryBtn.classList.remove("hidden");

    });

    // RETRY QUIZ
    retryBtn.addEventListener("click", function () {

        form.reset();

        for (let i = 1; i <= 5; i++) {

            const result = document.getElementById("result" + i);

            result.textContent = "";
            result.className = "";

        }

        scoreDisplay.textContent = "";

        retryBtn.classList.add("hidden");

    });

});
