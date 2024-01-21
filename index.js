const display= document.querySelector("#display");


function appendTODisplay(input){
    display.value += input;
}
function clearDisplay(){
display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);

    }catch(error){
        display.value="Error";
    }

}