function parallelogramCalculate(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseValue = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseValue);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightValue = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightValue);

    const area = base * height;
    
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}