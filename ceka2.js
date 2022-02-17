function ceka2(){
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