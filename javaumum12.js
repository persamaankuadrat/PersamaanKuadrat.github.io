


  
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
  