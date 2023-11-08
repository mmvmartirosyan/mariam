
let riddles = [
    { question: "Что можно увидеть с закрытыми глазами?", answer: "сон" },
    { question: "Что может стать больше, если отрезать от него часть?", answer: "дыры" },
    { question: "Что идёт по лесу, а шумит?", answer: "поток" }
];

let randomIndex, currentRiddle, attempts;

// Функция для начала игры и генерации новой загадки
function startGame() {
    //Метод Math.floor() - округление вниз. 
    //Округляет аргумент до ближайшего меньшего целого.
    randomIndex = Math.floor(Math.random() * riddles.length);
    currentRiddle = riddles[randomIndex];
    attempts = 3;
    let answerElement = document.getElementById("answer-input");
    let resultElement = document.getElementById("result");

    answerElement.value = "";
    resultElement.textContent = "";

    generateRiddle();
}

// Функция для генерации загадки
function generateRiddle() {
    let riddleElement = document.getElementById("riddle");
    let attemptsElement = document.getElementById("attempts");
    
    riddleElement.textContent = currentRiddle.question;
    attemptsElement.textContent = `Осталось попыток: ${attempts}`;
}

// Функция для проверки ответа
function checkAnswer() {
    let answerElement = document.getElementById("answer-input");
    let resultElement = document.getElementById("result");
//Метод toLowerCase() возвращает значение строки, преобразованное в нижний регистр. Метод toLowerCase() не изменяет значение самой строки.
    let answer = answerElement.value.toLowerCase();
    let correctAnswer = currentRiddle.answer.toLowerCase();
    if (answer === correctAnswer) {
        resultElement.textContent = "Правильно! Вы угадали загадку.";
        resultElement.style.color = "green";
        
    } else {
        attempts--;
        if (attempts > 0) {
            resultElement.textContent = `Неправильно! Попробуйте еще раз. Осталось попыток: ${attempts}`;
            resultElement.style.color = "red";
        } else {
            resultElement.textContent = `Неправильно! Вы исчерпали все попытки. Правильный ответ: ${correctAnswer}`;
            resultElement.style.color = "red";
        }
    }
}

// Функция для начала игры заново
function restartGame() {
    startGame();
}

// Вызов функции для начала игры при загрузке страницы
window.onload = startGame;

function check(form){
    var my_surname = document.getElementById ('surname');
    var my_name = document.getElementById ('fname');
    var my_age = document.getElementById ('age');
    var my_email = document.getElementById ('email')
    var result_p = document.getElementById ('resultat');
if (form.tochka.checked) {
    result_p.innerHTML=  my_surname.value + my_name.value + my_age.value + my_email.value;
}
else {
    result_p.innerHTML= '';
}
}
  

function checkPossibility() {
    var diameter =document.getElementById('diameter').value;
    var width =document.getElementById('width').value;
    
    if(width <= diameter / Math.sqrt(2)) {
        document.getElementById('resulti').textContent = "Можно выпилить квадратный брус шириной " + width + ".";
    } else {
        document.getElementById('resulti').textContent = "Невозможно выпилить квадратный брус шириной " + width + ".";
    }
}



function insert_img(){
    const img = document.createElement('img');
    img.src = 'https://emporiumgold.com/upload/medialibrary/eee/eeecbaea5d2b6ef83f55bd9e3b06fc8f.jpg';
    img.alt='accessory';
    document.getElementsByTagName ("div")[8].appendChild(img);
    img.width='500';
}
const node_insert_img= document.getElementById ("insert_img")
node_insert_img.addEventListener ("click", insert_img)
