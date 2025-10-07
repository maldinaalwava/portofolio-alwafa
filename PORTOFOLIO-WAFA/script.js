function ShowMessage(){
    alert("semangat belajar web!");
}

var i = 0;
var txt = 'saya Alwafa';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

window.onload = function() {
    typeWriter();
}