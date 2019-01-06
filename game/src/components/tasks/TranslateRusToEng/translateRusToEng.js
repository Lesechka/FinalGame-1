import jsonFile1 from './WordTranslateRusToEng/wordsTranslateRusToEng1.json';
import jsonFile2 from './WordTranslateRusToEng/wordsTranslateRusToEng2.json';
import jsonFile3 from './WordTranslateRusToEng/wordsTranslateRusToEng3.json';
import jsonFile4 from './WordTranslateRusToEng/wordsTranslateRusToEng4.json';
import jsonFile5 from './WordTranslateRusToEng/wordsTranslateRusToEng5.json';

import {getRandomInArray} from '../MathTask/MathJS/commonFunctions';

import * as vars from '../MathTask/MathJS/commonVariables';


const array;
const numberOfObject;
const randomObject, randomWord, randomWordTranslation;


function jsonFunc (jsonFile) {
    array = jsonFile['words'];
    numberOfObject = getRandomInArray(array);
    randomObject = array[numberOfObject];
    randomWord = randomObject['word'];
    randomWordTranslation = randomObject['translation'];
}


     export function translateRusToEngTask (level, clear_modal) {

        if (level === 1) {
            jsonFunc(jsonFile1);
        } else if (level === 2) {
            jsonFunc(jsonFile2);
        } else if (level === 3) {
            jsonFunc(jsonFile3);
        } else if (level === 4) {
            jsonFunc(jsonFile4);
        } else if (level === 5) {
            jsonFunc(jsonFile5);
        }
        
        const gameLevel = document.querySelector('#task-Level__h1');
        gameLevel.textContent = 'Уровень ' + level;
    
        const titleForQuestion = document.querySelector('#task-Level__h3');
        titleForQuestion.textContent = 'Переведи слово на английский язык: ' +  randomWord;
    
        const input = document.querySelector('#task-Level__input');
        let answer_button = document.querySelector('.task-Level__answer');
        answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value, clear_modal)})
    
    }
    export function resultOfQuestion(answer, clear_modal) {
        function isCorrect(option) {
            return option == answer;
          }
         // правильный результат
        if (randomWordTranslation.some(isCorrect)) {
            document.querySelector('.modal-body').innerHTML="<h1>"+vars.randomCongratulationTitle+"</h1>";
            let aplodisment=new Audio('sounds/aplodismenty_shot.mp3');
            aplodisment.play();
            localStorage.setItem('answerState', true);
            clear_modal();
            //дейстие игрока
    
        } else {
            document.querySelector('.modal-body').innerHTML="<h1>"+vars.randomMistakeTitle+"</h1>";
            let soundluse=new Audio('sounds/dissapoinment_shot.mp3');
            soundluse.play();
            localStorage.setItem('answerState', false);
            clear_modal();
            //действие монстра
        }
    }
  