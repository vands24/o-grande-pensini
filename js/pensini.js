console.log("Welcome");

let ledboard = [];

let minValue = 1;
let maxValue = 200;

let guess = (minValue + maxValue) / 2;
let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;

let interval = undefined;
let changeCallCount = 0;

//função para mudar as cores dos blocos
let change = function () {

    //Define um array de cores
    let colors = ["#FCA3EC", "#FCDFA3", "#A3FCB3", "#A3C0FC", "#B7ACC1"];
    changeCallCount++;

    if (changeCallCount > 50) {
        clearInterval(interval);
        changeCallCount = 0;

        window.location.reload();
    }
    //Para cada elemento do array ledboard, vai ser escolhida uma cor aleatória
    ledboard.forEach(function (x) {
        x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
}

//Como o valor de guess vai mudar várias vezes facilita ter uma função para o fazer
let writeGuessToHTML = function () {
    guessValueElement.innerHTML = Math.round(guess);
}

//Função para o funcionamento do Botão Acima
let onButtonHigherPressed = function () {
    minValue = guess;
    guess = (minValue + maxValue) / 2;
    writeGuessToHTML();
}

//Função para o funcionamento do Botão Abaixo
let onButtonLowerPressed = function () {
    maxValue = guess;
    guess = (minValue + maxValue) / 2;
    writeGuessToHTML();
}

//Função para o funcionamento do Botão Certo
let onButtonSuccessPressed = function () {
    console.log("Eureka!");

    let victoryDiv = document.getElementById("victory");
    victoryDiv.classList.remove("d-none");

    //chama a função change a cada 100 ms
    interval = setInterval(change, 100);
}

//função que identifica os elementos(palavras) que tratam dos valores e lhes atribui um valor
//Isto torna mais fácil mudar os valores sem mudar o resto do código
let main = function () {
    ledboard = Array.from(document.getElementsByClassName("block"));


    minValueElement = document.getElementById("minValue");
    maxValueElement = document.getElementById("maxValue");
    guessValueElement = document.getElementById("guess");

    minValueElement.innerHTML = minValue;
    maxValueElement.innerHTML = maxValue;
    
    writeGuessToHTML();

}

main();