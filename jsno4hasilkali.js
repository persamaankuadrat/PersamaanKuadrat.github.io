
  function cek1(){
    form.jawaban.value= "A";
    }
    function cek2(){
    form.jawaban.value= "B";
    }
    function cek3(){
      form.jawaban.value= "C";
      }
  
  
    function cekjawaban(){
    if(form.jawaban.value=='A'|| form.jawaban.value=='a'){
    document.getElementById("tampil").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = -5\\] dan \\[x_{2} = -6\\] yakni \\[x^2 + 11x + 30 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp; x^{2} - \\left ( x_{1} + x_{2} \\right ) + \\left ( x_{1} \\cdot x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - \\left ( (-5) + (-6) \\right ) + \\left ( (-5) \\cdot (-6) \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - (-11) + 30 = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} + 11x + 30 = 0\\]   ";
    MathJax.typeset();
    }else{
    document.getElementById("tampil").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan menggunakan rumus jumlah & hasil kali akar-akar yaitu : <br>\\[x^{2} - \\left ( x_{1} + x_{2} \\right ) + \\left ( x_{1} \\cdot x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
    }
    MathJax.typeset();
  }
  
  
  
  