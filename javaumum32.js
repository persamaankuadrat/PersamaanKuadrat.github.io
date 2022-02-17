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



  
	function cek1no3var(){
    form3.variabelno3.value= "A";
    }
    function cek2no3var(){
    form3.variabelno3.value= "B";
    }
    function cek3no3var(){
    form3.variabelno3.value= "C";
    }
  
    function cekjawabanno3var(){
    if(form3.variabelno3.value=='A'){
    document.getElementById("tampilno3var").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilno3var").style.color = "green";
    }else{
    document.getElementById("tampilno3var").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
    document.getElementById("tampilno3var").style.color = "red";
    }
  }
  
    function cek1no3koef(){
      form3.koefisienno1.value= "A";
      }
      function cek2no3koef(){
      form3.koefisienno3.value= "B";
      }
      function cek3no3koef(){
      form3.koefisienno3.value= "C";
      }
      function cekjawabanno3koef(){
      if(form3.koefisienno3.value=='C'){
      document.getElementById("tampilno3koef").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno3koef").style.color = "green";
      }else{
      document.getElementById("tampilno3koef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
      document.getElementById("tampilno3koef").style.color = "red";
      }
    }
  
    function cek1no3kon(){
      form3.konstantano3.value= "A";
      }
      function cek2no3kon(){
      form3.konstantano3.value= "B";
      }
      function cek3no3kon(){
      form3.konstantano3.value= "C";
      }
      function cekjawabanno3kon(){
      if(form3.konstantano3.value=='C'){
      document.getElementById("tampilno3kon").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno3kon").style.color = "green";
      }else{
      document.getElementById("tampilno3kon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
      document.getElementById("tampilno3kon").style.color = "red";
      }
    }
  