//Methods to simply update the calculator display 
             
function btnThingy(){ 
   document.calculator.result.value +="±";}

function btnLeftBrac(){
   document.calculator.result.value +="(";}
      
function btnRightBrac(){
   document.calculator.result.value +=")";}
             
function btnMinus(){
   document.calculator.result.value +="-";}

function btn7(){
   document.calculator.result.value +="7";}
             
function btn8(){
   document.calculator.result.value +="8";}

function btn9(){
   document.calculator.result.value +="9";}

function btn4(){
   document.calculator.result.value +="4";}
             
function btn5(){
   document.calculator.result.value +="5";}
             
function btn6(){
   document.calculator.result.value +="6";}
             
function btn1(){
   document.calculator.result.value +="1";}
             
function btn2(){
   document.calculator.result.value +="2";}
             
function btn3(){
    document.calculator.result.value +="3";}
             
function btnPlus(){
 document.calculator.result.value +="+";}
             
function btn0(){
   document.calculator.result.value +="0";}
 
// method to evalute the given values with the cal display 
// returns the result to the display
function equal(){
   var res = eval(document.calculator.result.value);
   document.calculator.result.value = res;
}
             
function clr(){       
   document.calculator.result.value = " ";
}
    