function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 220;
   if (elementTop < windowHeight - elementVisible + 80) {
        reveals[i].classList.add("active");
} 			else {
        reveals[i].classList.remove("active");
}
}
}
window.addEventListener("scroll", reveal);



function light() {
  var lights = document.querySelectorAll(".light");
  
  for (var i = 0; i < lights.length; i++) {
        var centerLeft = window.innerWidth*.46;
        var centerRight = window.innerWidth*.88;
      
      var elementRight = lights[i].getBoundingClientRect().right;
   if (elementRight > centerLeft && elementRight < centerRight) {
        lights[i].classList.add("active");
        
} 			else {
        lights[i].classList.remove("active");
}
}
}
      

window.setInterval(light, 100);