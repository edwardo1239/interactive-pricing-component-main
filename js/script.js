var slide = document.getElementById("slide");
var output = document.getElementById("value");

output.innerHTML = slide.value;

slide.oninput = function(){
    output.innerHTML = this.value;
}


slide.addEventListener("mousemove", function(){
    var x = slide.value/5 ;
    var color = "linear-gradient(90deg, hsl(174, 77%, 80%)" + x + 
                "%,  hsl(224, 65%, 95%)10%)";
    slide.style.background = color;
})