const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink'];
let correctAnswer;

function startGame() {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const correctColor = colors[randomColorIndex];
    
    document.getElementById('colorBox').style.backgroundColor = correctColor.toLowerCase();
    
    // Shuffle options and place one correct answer randomly
    let options = shuffleArray([correctColor, getRandomColor(), getRandomColor()]);
    
    for (let i = 0; i < 3; i++) {
        document.getElementById(`option${i}`).textContent = options[i];
    }
    
    correctAnswer = options.indexOf(correctColor);
    document.getElementById('result').textContent = "";
}

function checkAnswer(selectedOption) {
    if (selectedOption === correctAnswer) {
        document.getElementById('result').textContent = "Correct!";
        document.getElementById('result').style.color = "green";
    } else {
        document.getElementById('result').textContent = "Wrong! Try again.";
        document.getElementById('result').style.color = "red";
    }
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startGame();
