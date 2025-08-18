const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[randomIndex];
}