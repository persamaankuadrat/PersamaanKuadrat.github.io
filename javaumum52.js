// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }


// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active2", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active2";
// }



  
	function cek1no5var(){
    form5.variabelno5.value= "A";
    }
    function cek2no5var(){
    form5.variabelno5.value= "B";
    }
    function cek3no5var(){
    form5.variabelno5.value= "C";
    }
  
    function cekjawabanno5var(){
    if(form5.variabelno5.value=='C'){
    document.getElementById("tampilno5var").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilno5var").style.color = "green";
    }else{
    document.getElementById("tampilno5var").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
    document.getElementById("tampilno5var").style.color = "red";
    }
  }
  
    function cek1no5koef(){
      form5.koefisienno5.value= "A";
      }
      function cek2no5koef(){
      form5.koefisienno5.value= "B";
      }
      function cek3no5koef(){
      form5.koefisienno5.value= "C";
      }
      function cekjawabanno5koef(){
      if(form5.koefisienno5.value=='B'){
      document.getElementById("tampilno5koef").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno5koef").style.color = "green";
      }else{
      document.getElementById("tampilno5koef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
      document.getElementById("tampilno5koef").style.color = "red";
      }
    }
  
    function cek1no5kon(){
      form5.konstantano5.value= "A";
      }
      function cek2no5kon(){
      form5.konstantano5.value= "B";
      }
      function cek3no5kon(){
      form5.konstantano5.value= "C";
      }
      function cekjawabanno5kon(){
      if(form5.konstantano5.value=='C'){
      document.getElementById("tampilno5kon").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno5kon").style.color = "green";
      }else{
      document.getElementById("tampilno5kon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
      document.getElementById("tampilno5kon").style.color = "red";
      }
    }
  