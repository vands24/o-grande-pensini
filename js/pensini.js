console.log("Welcome");

let minValue = 1;
let maxValue = 200;

let guess = (minValue + maxValue) / 2;
let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;


//Como o valor de guess vai mudar várias vezes facilita ter uma função para o fazer
let writeGuessToHTML = function () {
    guessValueElement.innerHTML = guess;
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
}

//função que identifica os elementos(palavras) que tratam dos valores e lhes atribui um valor
//Isto torna mais fácil mudar os valores sem mudar o resto do código
let main = function () {
    minValueElement = document.getElementById("minValue");
    maxValueElement = document.getElementById("maxValue");
    guessValueElement = document.getElementById("guess");

    minValueElement.innerHTML = minValue;
    maxValueElement.innerHTML = maxValue;

    writeGuessToHTML();

}

main();