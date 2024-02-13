/**
 * Objective: get base, height of triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1. get base value of the triangle.
 * step -2. added an id in the base input field.
 * step -3. use getElementById to access the input field
 * step -4. get value from the input field. (value is string now)
 * step -5. convert the value to a number. use parseFloat.
 * 
 */
function triangleCalculate(){
    // triangle base input
    const triangleBaseInput = document.getElementById('inputBaseValue');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);

    //triangle height input
    const triangleHeightInput = document.getElementById('inputHeightValue');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height);

    //calculate triangle area
    const area = 0.5 * base * height;
    console.log('Area of the triangle is:', area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}
