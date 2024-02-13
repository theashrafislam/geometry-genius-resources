function ellipseCalculate(){
    const ellipseOneInput = document.getElementById('ellipse-height');
    const ellipseOneValue = ellipseOneInput.value;
    const one = parseFloat(ellipseOneValue);

    const ellipseTwoInput = document.getElementById('ellipse-base');
    const ellipseTwoValue = ellipseTwoInput.value;
    const two = parseFloat(ellipseTwoValue);

    const area = 3.14 * one * two;
    
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}