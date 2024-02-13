function pentagonCalculate(){
    const pentagonOneInput = document.getElementById('pentagon-height');
    const pentagonOneValue = pentagonOneInput.value;
    const one = parseFloat(pentagonOneValue);

    const pentagonTwoInput = document.getElementById('pentagon-base');
    const pentagonTwoValue = pentagonTwoInput.value;
    const two = parseFloat(pentagonTwoValue);

    const area = 0.5 * one * two;
    
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}