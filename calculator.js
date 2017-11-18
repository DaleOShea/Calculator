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

try {
    const buttonObsv = Observable.merge(
      Observable.fromEvent(leftBracketBtn, 'click').mapTo(valLeftBracket),
      Observable.fromEvent(rightBracketBtn,'click').mapTo(valRightBracket),
      Observable.fromEvent(plusMinusBtn, 'click').mapTo(valPlusMinus),
      Observable.fromEvent(sevenBtn, 'click').mapTo(valSeven),
      Observable.fromEvent(eightBtn, 'click').mapTo(valEight),
      Observable.fromEvent(nineBtn, 'click').mapTo(valNine),
      Observable.fromEvent(multiplyBtn, 'click').mapTo(valMultiple),
      Observable.fromEvent(fourBtn, 'click').mapTo(valFour),
      Observable.fromEvent(fiveBtn, 'click').mapTo(valFive),
      Observable.fromEvent(sixBtn, 'click').mapTo(valsix),
      Observable.fromEvent(minusBtn, 'click').mapTo(valMinus),
      Observable.fromEvent(oneBtn, 'click').mapTo(valOne),
      Observable.fromEvent(twoBtn, 'click').mapTo(valTwo),
      Observable.fromEvent(threeBtn, 'click').mapTo(valThree),
      Observable.fromEvent(plusBtn, 'click').mapTo(valPlus),
      Observable.fromEvent(zeroBtn, 'click').mapTo(valPlus),
      Observable.fromEvent(dotBtn, 'click').mapTo(valDot),
      Observable.fromEvent(clearBtn, 'click').mapTo(valClear),
      Observable.fromEvent(equalsBtn, 'click').mapTo(valEquals))

      var charCode;
      var charString;

      //handle Keyboard input
      var keyUps = Observable.fromEvent(document, 'keyup')
       .filter(function(event) {
       charCode = event.keyCode || event.which;
       charString = String.fromCharCode(charCode);

       if (charString == '0' ||
           charString == '1' ||
           charString == '2' ||
           charString == '3' ||
           charString == '4' ||
           charString == '5' ||
           charString == '6' ||
           charString == '7' ||
           charString == '8' ||
           charString == '9' ||
           charString == '(' ||
           charString == ')' ||
           charString == '-' ||
           charString == '+' ||
           charString == '=' ||
           charString == 'x' ||
           charString == '*' ||
           charString == 'X' ||
           charString == '.' ||
           charString == 'c') {
            return charString;}

        if (charCode == 107) {
            return '+';}

        if (charCode == 189){
            return '-';}

        if (charCode == 191) {
            return '/';}

        if (charCode == 187) {
            return '=';}
      });

      keyUps.subscribe(function(event) {

        if(event.key == 'X' || event.key == 'x') {
          display.value += '*';

        } else if(event.key == 'C' || event.key == 'c') {
          display.value = ' ';

        }else if(event.key == '=') {

          var result = eval(display.value);
          display.value = result;
        }else {

          display.value += event.key;
        }
      });
    } catch (error) {
        console.log(error.message);
}
