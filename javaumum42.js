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



  
	function cek1no4var(){
    form4.variabelno4.value= "A";
    }
    function cek2no4var(){
    form4.variabelno4.value= "B";
    }
    function cek3no4var(){
    form4.variabelno4.value= "C";
    }
  
    function cekjawabanno4var(){
    if(form4.variabelno4.value=='B'){
    document.getElementById("tampilno4var").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilno4var").style.color = "green";
    }else{
    document.getElementById("tampilno4var").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
    document.getElementById("tampilno4var").style.color = "red";
    }
  }
  
    function cek1no4koef(){
      form4.koefisienno4.value= "A";
      }
      function cek2no4koef(){
      form4.koefisienno4.value= "B";
      }
      function cek3no4koef(){
      form4.koefisienno4.value= "C";
      }
      function cekjawabanno4koef(){
      if(form4.koefisienno4.value=='A'){
      document.getElementById("tampilno4koef").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno4koef").style.color = "green";
      }else{
      document.getElementById("tampilno4koef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
      document.getElementById("tampilno4koef").style.color = "red";
      }
    }
  
    function cek1no4kon(){
      form4.konstantano4.value= "A";
      }
      function cek2no4kon(){
      form4.konstantano4.value= "B";
      }
      function cek3no4kon(){
      form4.konstantano4.value= "C";
      }
      function cekjawabanno4kon(){
      if(form4.konstantano4.value=='C'){
      document.getElementById("tampilno4kon").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno4kon").style.color = "green";
      }else{
      document.getElementById("tampilno4kon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
      document.getElementById("tampilno4kon").style.color = "red";
      }
    }
  