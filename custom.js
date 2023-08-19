// Daynamic way to get data
function getInputFieldById(fieldId){
    const inputField    = document.getElementById(fieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function setElementArea(elementId, area){
    const elementArea = document.getElementById(elementId);
    elementArea.innerText = area;
}



// calculate Triangle Area
function calculateTriangleArea(){
    const baseField = getInputFieldById('triangle-base-field');
    const heightField = getInputFieldById('triangle-height-field');
    const area = 0.5 * baseField * heightField; //Area = 0.5 × b × h
    
    setElementArea('triangle-area-element', area);
}

// calculate Rectangle Area
function calculateRectangleArea(){
    const widthField    = getInputFieldById('rectangle-width-field');
    const lengthField    = getInputFieldById('rectangle-length-field');
    const area = widthField * lengthField; // Area (A) = w × l

    setElementArea('rectangle-area-element', area);
}


// calculate Parallelogram Area
function calculateParallelogramArea(){
    const baseField = getInputFieldById('parallelogram-base-field');
    const heightField = getInputFieldById('parallelogram-height-field');
    const area = baseField * heightField;  // Area (A) = b × h

    setElementArea('parallelogram-area-element', area);
}