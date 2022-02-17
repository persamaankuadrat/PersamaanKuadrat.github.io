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

var x = document.getElementById("isimateri2");
var xx= document.querySelector('.isimateri2');
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

