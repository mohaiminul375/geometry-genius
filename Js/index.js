console.log('indexjs')

//function for get input field value
function getInputFieldValue(id){
    const inputFieldString = document.getElementById(id);
    const inputField = parseFloat(inputFieldString.value);
    inputFieldString.value = '';
    return inputField
};

// function for get text element value
function getTextElementValue(id){
const textElementString = document.getElementById(id).innerText;

return textElementString;
}

let serial = 0;
//set data table by function
function setDataTable(serial,gName, areaCalculation){
    
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${gName}</td>
      <td>${(areaCalculation).toFixed(2)}cm<sup>2</sup></td>
      <td><button>Convert</button></td>
    `
    container.appendChild(tr);
}
//calculate triangle area volume
document.getElementById('btn-triangle').addEventListener('click', function(){

      serial += 1;
    //get input field value by function
    const base = getInputFieldValue('triangle-b')
    const height = getInputFieldValue('triangle-h')
    
    //get text element value by function
    const gName = getTextElementValue('triangle-name');
    const areaCalculation = 0.5 * base * height;

   
  if(!isNaN(base) && !isNaN(height)){
    

    //send data to table by function
    setDataTable(serial,gName, areaCalculation);
  } else{
      alert('please input a valid number')
   return; 
  }

});

//calculate Rectangle area volume
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    //get input field value by function
    const length = getInputFieldValue('rectangle-l')
    const width = getInputFieldValue('rectangle-w')
    
    //get text element value by function
    const gName = getTextElementValue('rectangle-name');
    const areaCalculation = length * width;

   
    if(!isNaN(length) && !isNaN(width)){
        
    
        //send data to table by function
        setDataTable(serial,gName, areaCalculation);
    } else{
        alert('please input a valid number')
     return; 
    }
});


//calculate Parallelogram area volume
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial += 1;
    //get input field value by function
    const base = getInputFieldValue('parallelogram-b')
    const height = getInputFieldValue('parallelogram-h')
    
    //get text element value by function
    const gName = getTextElementValue('parallelogram-name');

    const areaCalculation = base * height;
  
    if(!isNaN(base) && !isNaN(height)){
    

    //send data to table by function
    setDataTable(serial,gName, areaCalculation);
    } else{
        alert('please input a valid number')
     return; 
    }
});


//calculate Rhombus area volume
document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial += 1;
    //get input field value by function
    const d1 = getInputFieldValue('rhombus-d1')
    const d2 = getInputFieldValue('rhombus-d2')
    
    //get text element value by function
    const gName = getTextElementValue('rhombus-name');

    const areaCalculation = 0.5 * d1 * d2;
    

    //send data to table by function
    
    if(!isNaN(d1) && !isNaN(d2)){
        setDataTable(serial,gName, areaCalculation);

    } else{
        alert('please input a valid number');
    }
});

//calculate pentagon area volume

document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    //get input field value by function
    const p = getInputFieldValue('pentagon-p')
    const b = getInputFieldValue('pentagon-b')
    
    //get text element value by function
    const gName = getTextElementValue('pentagon-name');

    const areaCalculation = 0.5 * p * b;
    

    //send data to table by function
  
    if(!isNaN(p) && !isNaN(b)){
        setDataTable(serial,gName, areaCalculation);

    } else{
        alert('please input a valid number');
    }
});

//calculate pentagon area volume

document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    //get input field value by function
    const a = getInputFieldValue('ellipse-a')
    const b = getInputFieldValue('ellipse-b')
    
    //get text element value by function
    const gName = getTextElementValue('ellipse-name');

    const areaCalculation = 3.14 * a * b;
    

    //send data to table by function
    if(!isNaN(a) && !isNaN(b)){
        setDataTable(serial,gName, areaCalculation);

    } else{
        alert('please input a valid number');
    }
});