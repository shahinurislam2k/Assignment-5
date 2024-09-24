
// input function value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
 };


// input function inner text
 function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
 };


// Page hidden section 
 function showSectionById(id){
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('donation-page').classList.add('hidden');
 
    document.getElementById(id).classList.remove('hidden');
 };


// Button Color Function
 function buttonColorById(id){
    document.getElementById('history-btn').style.backgroundColor='#f2f2f2';
    document.getElementById('donation-btn').style.backgroundColor='#f2f2f2';

    document.getElementById(id).style.backgroundColor ='#b4f461';
 };
