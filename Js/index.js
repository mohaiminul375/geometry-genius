console.log('indexjs')

//function for get input field value
function getInputFieldValue(id){
    const inputFieldString = document.getElementById(id).value;
    const inputField = parseFloat(inputFieldString);
    return inputField
};

// function for get text element value
function getTextElementValue(id){
const textElementString = document.getElementById(id).innerText;

return textElementString;
}


//set data table by function
function setDataTable(gName, areaCalculation){
    
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${1}</td>
      <td>${gName}</td>
      <td>${areaCalculation}cm<sup>2</sup></td>
      <td><button>Convert</button></td>
    `
    container.appendChild(tr);
}
//calculate triangle area volume
document.getElementById('btn-triangle').addEventListener('click', function(){

    //get input field value by function
    const base = getInputFieldValue('triangle-b')
    const height = getInputFieldValue('triangle-h')
    
    //get text element value by function
    const gName = getTextElementValue('triangle-name');

    const areaCalculation = 0.5 * base * height;
    console.log(areaCalculation);

    //send data to table by function
    setDataTable(gName, areaCalculation);
});

//calculate Rectangle area volume
document.getElementById('btn-rectangle').addEventListener('click', function(){

    //get input field value by function
    const length = getInputFieldValue('rectangle-l')
    const width = getInputFieldValue('rectangle-w')
    
    //get text element value by function
    const gName = getTextElementValue('rectangle-name');

    const areaCalculation = length * width;
    console.log(areaCalculation);

    //send data to table by function
    setDataTable(gName, areaCalculation);
});