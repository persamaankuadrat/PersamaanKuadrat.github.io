function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active2");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}

var x = document.getElementById("isimateri");
var xx= document.querySelector('.isimateri');
var x1 = document.getElementById("petunjuk");
var xx1= document.querySelector('.petunjuk');
var x2 = document.getElementById("petunjuk2");
var xx2= document.querySelector('.petunjuk2');
var x3 = document.getElementById("petunjuk3");
var xx3= document.querySelector('.petunjuk3');
xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
})
xx1.addEventListener("click",function(){
	x1.classList.toggle("hilang");
  })
  xx2.addEventListener("click",function(){
	x2.classList.toggle("hilang");
  })
  xx3.addEventListener("click",function(){
	x3.classList.toggle("hilang");
  })

let jjj = document.querySelector(".jjj");
let btn =document.querySelector(".btn");
btn.addEventListener("click", function(){
	console.log("ok")
	jjj.classList.toggle("hilang");
} );

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active2";
}