console.log("script.js connected!");



     document.addEventListener("DOMContentLoaded", function () {
            const resultDiv = document.getElementById("result");
            let answers = []; // Stores "positive" or "negative"

            // Attach click handlers to all buttons
            document.querySelectorAll("button[data-value]").forEach(btn => {
                btn.addEventListener("click", function () {
                    const value = this.getAttribute("data-value");
                    answers.push(value);

                    // Show progress
                    resultDiv.textContent = `Answer recorded: ${value} (${answers.length}/3 questions answered)`;

                    // If all questions answered, show final personality
                    if (answers.length === 3) {
                        const positiveCount = answers.filter(a => a === "positive").length;
                        const negativeCount = answers.filter(a => a === "negative").length;

                        if (positiveCount > negativeCount) {
                            resultDiv.textContent = `Your personality leans POSITIVE (${positiveCount} positive vs ${negativeCount} negative answers).`;
                        } else if (negativeCount > positiveCount) {
                            resultDiv.textContent = `Your personality leans NEGATIVE (${negativeCount} negative vs ${positiveCount} positive answers).`;
                        } else {
                            resultDiv.textContent = `Your personality is BALANCED (${positiveCount} positive vs ${negativeCount} negative answers).`;
                        }
                    }
                });
            });
        });
