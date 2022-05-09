
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
    if(form.jawaban.value=='B'|| form.jawaban.value=='b'){
    document.getElementById("tampil").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = -5\\] dan \\[x_{2} = 2\\] yakni \\[x^2 + 3x - 10 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - x_{1} \\right ) \\left ( x - x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - (-5 ) \\right ) \\left ( x - 2 \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp;\\left ( x + 5 \\right ) \\left ( x - 2 \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - 2x + 5x - 10 = 0\\]<br><br>\\[\\Leftrightarrow &emsp; x^{2} + 3x - 10 = 0\\]  ";
    MathJax.typeset();
    }else{
    document.getElementById("tampil").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan cara faktor yaitu : <br>\\[\\left ( x - x_{1} \\right )\\left ( x - x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
    }
    MathJax.typeset();
  }
  
  
  

  
  