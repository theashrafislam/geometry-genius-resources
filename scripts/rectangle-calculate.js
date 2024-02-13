function rectangleCalculate(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthValue);

    const area = width * length;
    
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}