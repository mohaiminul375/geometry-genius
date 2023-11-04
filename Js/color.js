// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//         color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
// } 

// document.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = 'white';
// });


// // document.querySelector('circle').addEventListener('mouseover', function (event){    
// //             event.target.style.fill = randomColor();
// // });
// document.getElementById('card-rectangle').addEventListener('onmouseover', function(e){
// console.log(e.target)
// })





















function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 




function setBackgroundColor(id){
    document.getElementById(id).addEventListener('mouseover', function(){
        document.getElementById(id).style.backgroundColor = randomColor();
         })
}

setBackgroundColor('card-triangle');
setBackgroundColor('card-rectangle');
setBackgroundColor('card-parallelogram');
setBackgroundColor('card-rhombus');
setBackgroundColor('card-pentagon');
setBackgroundColor('card-ellipse');