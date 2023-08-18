// Daynamic way to get data
function getInputFieldById(fieldId){
    const inputField    = document.getElementById(fieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}


// calculate Triangle Area
function calculateTriangleArea(){
    const baseField = getInputFieldById('base-field');
    const heightField = getInputFieldById('height-field');

    const area = 0.5 * baseField * heightField; //Area = 0.5 × b × h
    
    // get and set area
    const triangleAreaElement = document.getElementById('triangle-area-element');
    triangleAreaElement.innerText = area;
}

// calculate Rectangle Area
function calculateRectangleArea(){
    
    const widthField    = getInputFieldById('width-field');
    const lengthField    = getInputFieldById('length-field');

    const area = widthField * lengthField; // Area (A) = w × l

    const rectangleAreaElement = document.getElementById('rectangle-area-element');
    rectangleAreaElement.innerText = area;
}
