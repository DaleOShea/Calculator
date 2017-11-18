import {Observable} from 'rxjs/Rx';

//clear cal display
display.value = "";
let counter = {value: ""};

//get button elements in DOM
const calDisplay = document.getElementById("display");
const leftBracketBtn = document.getElementById("(");
const rightBracketBtn = document.getElementById(")");
const plusMinusBtn = document.getElementById("-1");
const divideBtn = document.getElementById("/");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const multiplyBtn = document.getElementById("*");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const minusBtn = document.getElementById("-");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const plusBtn = document.getElementById("+");
const zeroBtn = document.getElementById("0");
const dotBtn = document.getElementById(".");
const clearBtn = document.getElementById("C");
const equalsBtn = document.getElementById("=");

//Get user input using acc and method and update display
const valLeftBracket = acc => ({value: acc.value + " " + "("});
const valRightBracket = acc => ({value: acc.value + " " + ")"});
const valPlusMinus = acc => ({value: acc.value *-1});
const valDivide = acc => ({value: acc.value + "/"});
const valSeven = acc => ({value: acc.value + "7"});
const valEight = acc => ({value: acc.value + "8"});
const valNine = acc => ({value: acc.value + "9"});
const valMultiple = acc => ({value: acc.value + "*"});
const valFour = acc => ({value: acc.value + "4"});
const valFive = acc => ({value: acc.value + "5"});
const valsix = acc => ({value: acc.value + "6"});
const valMinus = acc => ({value: acc.value + "-"});
const valOne = acc => ({value: acc.value + "1"});
const valTwo = acc => ({value: acc.value + "2"});
const valThree = acc => ({value: acc.value + "3"});
const valPlus = acc => ({value: acc.value + "+"});
const valZero = acc => ({value: acc.value + "0"});
const valDot = acc => ({value: acc.value + "."});
const valClear = acc => ({value: acc.value = 0});
const valEquals = acc => ({value: eval(acc.value)});
