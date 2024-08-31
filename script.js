const display = document.getElementById("display")
function appendToDisplay(input){
    display.value += input;
    display.scrollLeft = display.scrollWidth;


}
function clearDisplay(){
    display.value = "";

}
function backspace(){
    let currentValue = display.value;
    
    display.value = currentValue.slice(0, -1);
    display.scrollLeft = display.scrollWidth;
}
function calculate(){
    try{
    display.value = eval(display.value);
    display.scrollLeft = display.scrollWidth;
    }
    catch(error){
        display.value = "Error";
    }

}