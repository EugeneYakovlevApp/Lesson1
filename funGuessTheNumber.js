let min = 1;
let max = 10;
let tryCount = 5;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

game();
function game(){
    let result;
    while (tryCount > 0){
        console.log(randomNumber);
        result = checkNumber(numLess,numMore,numWn,numLoss, mess(tryCount));     
        tryCount -= 1;  
        if(result == true){
            break;
        }
    }
    if(result == false){ 
    numLoss();}
}

function checkNumber(numLess,numMore,numWn,numLoss,m){
    if(m > randomNumber){
        numMore();
    }else if (m < randomNumber){
        numLess();
    }else if ( m == randomNumber){
        numWn();
        return true;
    }
    return false;
}

function mess(tryCount){
    return prompt("Угадай число! Кол-во попыток " + tryCount +". Введите ваше число: ", "");
}

function numLess(){
    alert("Загаданное число больше");
}
function numMore(){
    alert("Загаданное число меньше");
}
function numWn(){
    alert("Вы отгадали число!");
}
function numLoss(){
    alert("Вы проиграли! Количество попыток закончилось...");
}

