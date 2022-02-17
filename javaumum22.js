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



  
	function cek1no2var(){
    form2.variabelno2.value= "A";
    }
    function cek2no2var(){
    form2.variabelno2.value= "B";
    }
    function cek3no2var(){
    form2.variabelno2.value= "C";
    }
  
    function cekjawabanno2var(){
    if(form2.variabelno2.value=='C'){
    document.getElementById("tampilno2var").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilno2var").style.color = "green";
    }else{
    document.getElementById("tampilno2var").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
    document.getElementById("tampilno2var").style.color = "red";
    }
  }
  
    function cek1no2koef(){
      form2.koefisienno2.value= "A";
      }
      function cek2no2koef(){
      form2.koefisienno2.value= "B";
      }
      function cek3no2koef(){
      form2.koefisienno2.value= "C";
      }
      function cekjawabanno2koef(){
      if(form2.koefisienno2.value=='B'){
      document.getElementById("tampilno2koef").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno2koef").style.color = "green";
      }else{
      document.getElementById("tampilno2koef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
      document.getElementById("tampilno2koef").style.color = "red";
      }
    }
  
    function cek1no2kon(){
      form1.konstantano2.value= "A";
      }
      function cek2no2kon(){
      form2.konstantano2.value= "B";
      }
      function cek3no2kon(){
      form2.konstantano2.value= "C";
      }
      function cekjawabanno2kon(){
      if(form2.konstantano2.value=='C'){
      document.getElementById("tampilno2kon").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno2kon").style.color = "green";
      }else{
      document.getElementById("tampilno2kon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
      document.getElementById("tampilno2kon").style.color = "red";
      }
    }
   