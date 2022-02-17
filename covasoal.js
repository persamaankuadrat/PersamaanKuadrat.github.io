function ceka(){
    var jwb1 = document.getElementById("texta");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "2"){
    document.getElementById("keta").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("keta").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

function cekb(){
    var jwb1 = document.getElementById("textb");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "3"){
    document.getElementById("ketb").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketb").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

function cekc(){
    var jwb1 = document.getElementById("textc");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-2"){
    document.getElementById("ketc").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketc").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}





function ceka2(){
  console.log("oko")
  var jwb1 = document.getElementById("texta2");
 
  var y = jwb1.value.toLowerCase();
  y=y.replace(/\s+/g, '');


if(y == "1"){
  document.getElementById("keta2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
} else{
  document.getElementById("keta2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
}

}

function cekb2(){
  var jwb1 = document.getElementById("textb2");
 
  var y = jwb1.value.toLowerCase();
  y=y.replace(/\s+/g, '');


if(y == "2"){
  document.getElementById("ketb2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
} else{
  document.getElementById("ketb2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
}

}

function cekc2(){
  var jwb1 = document.getElementById("textc2");
 
  var y = jwb1.value.toLowerCase();
  y=y.replace(/\s+/g, '');


if(y == "-8"){
  document.getElementById("ketc2").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
} else{
  document.getElementById("ketc2").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
}
}




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



	function cek1var(){
	form.variabel1.value= "A";
	}
	function cek2var(){
	form.variabel1.value= "B";
	}
	function cek3var(){
	form.variabel1.value= "C";
	}

	function cekjawabanvar(){
	if(form.variabel1.value=='A'){
  document.getElementById("tampilvar").innerHTML="Selamat! jawabanmu benar";
  document.getElementById("tampilvar").style.color = "green";
	}else{
  document.getElementById("tampilvar").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
  document.getElementById("tampilvar").style.color = "red";
	}
}

  function cek1koef(){
    form.koefisien1.value= "A";
    }
    function cek2koef(){
    form.koefisien1.value= "B";
    }
    function cek3koef(){
    form.koefisien1.value= "C";
    }
    function cekjawabankoef(){
    if(form.koefisien1.value=='B'){
    document.getElementById("tampilkoef").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilkoef").style.color = "green";
    }else{
    document.getElementById("tampilkoef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
    document.getElementById("tampilkoef").style.color = "red";
    }
  }

  function cek1kon(){
    form.konstanta1.value= "A";
    }
    function cek2kon(){
    form.konstanta1.value= "B";
    }
    function cek3kon(){
    form.konstanta1.value= "C";
    }
    function cekjawabankon(){
    if(form.konstanta1.value=='C'){
    document.getElementById("tampilkon").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilkon").style.color = "green";
    }else{
    document.getElementById("tampilkon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
    document.getElementById("tampilkon").style.color = "red";
    }
  }





  
	function cek1no1var(){
    form1.variabelno1.value= "A";
    }
    function cek2no1var(){
    form1.variabelno1.value= "B";
    }
    function cek3no1var(){
    form1.variabelno1.value= "C";
    }
  
    function cekjawabanno1var(){
    if(form1.variabelno1.value=='A'){
    document.getElementById("tampilno1var").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilno1var").style.color = "green";
    }else{
    document.getElementById("tampilno1var").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
    document.getElementById("tampilno1var").style.color = "red";
    }
  }
  
    function cek1no1koef(){
      form1.koefisienno1.value= "A";
      }
      function cek2no1koef(){
      form1.koefisienno1.value= "B";
      }
      function cek3no1koef(){
      form1.koefisienno1.value= "C";
      }
      function cekjawabanno1koef(){
      if(form1.koefisienno1.value=='B'){
      document.getElementById("tampilno1koef").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno1koef").style.color = "green";
      }else{
      document.getElementById("tampilno1koef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
      document.getElementById("tampilno1koef").style.color = "red";
      }
    }
  
    function cek1no1kon(){
      form1.konstantano1.value= "A";
      }
      function cek2no1kon(){
      form1.konstantano1.value= "B";
      }
      function cek3no1kon(){
      form1.konstantano1.value= "C";
      }
      function cekjawabanno1kon(){
      if(form1.konstantano1.value=='C'){
      document.getElementById("tampilno1kon").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilno1kon").style.color = "green";
      }else{
      document.getElementById("tampilno1kon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
      document.getElementById("tampilno1kon").style.color = "red";
      }
    }
  