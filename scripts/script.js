'use strict';
function getRandomIntInclusive(min, max) { // функция рандома
    min = Math.ceil(min); // минимум округляется в меньшую сторону
    max = Math.floor(max); // максимум округляется в большую сторону
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
alert('Привет, тебе нужно угадать число от 1 до 100, давай начнем игру :)') // приветсвуем пользователя

let game = function(){ // задаем функцию нашей игры
    let number=getRandomIntInclusive(0,100); // задаем число, которое нужно угадать с помощью рандома
    let attempt=0; // переменная хранящая попытки
let call = function(){ // функция всплывающего окна с вопросом и проверкой
    let question = prompt('Угадай число от 1 до 100'); // переменная хранящая введеный результат
    if(question==null){ // сообщение при нажатие на отмену
        return alert('Игра окончена');
    }
    else if (isNaN(parseFloat(question))==true){ // проверка что введено число, а не строка (в том числе пустая строка с пробелами)
        return alert('Долбоеб, введи число'), call();
    }
    else{
    if(+question===number){ // проверка резульата когда угадал
       return alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'), attempt=0, call(); // конец игры
        

    }else if(+question>number && attempt<9){ // проверка когда ввел больше и количетво попыток
        attempt=attempt+1;
        return alert('Загаданное число меньше, осталось попыток: '+ (10-attempt)), // сообщение с подсказкой
        call(); // заново вызываем функцию внутри себя
    }
    else if(+question<number && attempt<9){ // проверка когда ввел меньше и количество попыток
        attempt=attempt+1;
        return alert('Загаданное число больше, осталось попыток: '+ (10- attempt)), // сообщение с подсказкой
        call(); // // заново вызываем функцию внутри себя
    }
    else{
        return alert('Попытки закончились, хотите сыграть еще ?'), call(); // если попытки кончились
    }
}
};
call() // вызываем всплывающие окно внутри функции игры
};
game();

