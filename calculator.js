import {Observable} from 'rxjs/Rx';

//clear cal display
display.value = "";

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
const addBtn = document.getElementById("+");
const zeroBtn = document.getElementById("0");
const dotBtn = document.getElementById(".");
const clearBtn = document.getElementById("C");
const equalsBtn = document.getElementById("=");
