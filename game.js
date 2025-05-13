document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const resultText = document.getElementById('result');
    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber); // Для тестирования

    submitButton.addEventListener('click', function() {
        let userGuess = parseInt(guessInput.value);
        
        if (isNaN(userGuess)) {
            resultText.textContent = 'Пожалуйста, введите число.';
        } else if (userGuess === randomNumber) {
            resultText.textContent = 'Верно! Вы угадали число.';
        } else if (userGuess > randomNumber) {
            resultText.textContent = 'Ваше число больше загаданного.';
        } else {
            resultText.textContent = 'Ваше число меньше загаданного.';
        }
    });
});