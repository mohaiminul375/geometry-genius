

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
         });
}

setBackgroundColor('card-triangle');
setBackgroundColor('card-rectangle');
setBackgroundColor('card-parallelogram');
setBackgroundColor('card-rhombus');
setBackgroundColor('card-pentagon');
setBackgroundColor('card-ellipse');


