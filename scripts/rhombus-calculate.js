function rhombusCalculate(){
    const rhombusOneInput = document.getElementById('rhombus-one');
    const rhombusOneValue = rhombusOneInput.value;
    const one = parseFloat(rhombusOneValue);

    const rhombusTwoInput = document.getElementById('rhombus-two');
    const rhombusTwoValue = rhombusTwoInput.value;
    const two = parseFloat(rhombusTwoValue);

    const area = 0.5 * one * two;
    
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}