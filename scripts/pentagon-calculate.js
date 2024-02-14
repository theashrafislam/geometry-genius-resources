// function pentagonCalculate(){
//     const pentagonOneInput = document.getElementById('pentagon-height');
//     const pentagonOneValue = pentagonOneInput.value;
//     const one = parseFloat(pentagonOneValue);

//     const pentagonTwoInput = document.getElementById('pentagon-base');
//     const pentagonTwoValue = pentagonTwoInput.value;
//     const two = parseFloat(pentagonTwoValue);

//     const area = 0.5 * one * two;
    
//     const pentagonAreaSpan = document.getElementById('pentagon-area');
//     pentagonAreaSpan.innerText = area;
// }


//another way
function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-height');
    const perimeter2 = getInputValueById('pentagon-base');
    const area = 0.5 * perimeter * perimeter2;
    setAreaValue('pentagon-area', area);
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setAreaValue(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}