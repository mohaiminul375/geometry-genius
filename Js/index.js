console.log('indexjs')

//function for get input field value
function getInputFieldValue(id){
    const inputFieldString = document.getElementById(id).value;
    const inputField = parseFloat(inputFieldString);
    return inputField
};

//function for get text element value
// function getTextElementValue(id){
// const textElementString = document.getElementById(id).innerText;
// const textElement = parseFloat(textElementString);
// return textElement;
// }


//calculate triangle area volume
document.getElementById('btn-triangle').addEventListener('click', function(){

    //get input field value by function
    const base = getInputFieldValue('triangle-b')
    const height = getInputFieldValue('triangle-h')
    
    //get text element value by function
    

    const triangleCalculation = 0.5 * base * height;
    console.log(triangleCalculation);
})