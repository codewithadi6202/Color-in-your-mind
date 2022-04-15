const color_box = document.getElementById('c-box');
const color_name = document.getElementById('name');


var color

function getVal() {
    color = document.querySelector('input').value;
}

function change(){
    color_box.style.backgroundColor = color;
    color_name.innerHTML = color;
}