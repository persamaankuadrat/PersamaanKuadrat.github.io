
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
    document.getElementById("tampil").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = -1\\] dan \\[x_{2} = -\\frac{1}{5}\\] yakni \\[5x^2 + 6x + 1 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - x_{1} \\right ) \\left ( x - x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - (-1) \\right ) \\left ( x - (-\\frac{1}{5}) \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; \\left ( x + 1 \\right ) \\left ( x + \\frac{1}{5} \\right ) = 0\\]<br><br>\\[\\Leftrightarrow &emsp; x^{2} + \\frac{1}{5}x + x + \\frac{1}{5} = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} + \\frac{6}{5}x + \\frac{1}{5} = 0 \\]<br><br> \\[\\Leftrightarrow &emsp;  \\left [ x^{2} + \\frac{6}{5}x + \\frac{1}{5} = 0 \\right ] \\] \\[\\times\\] 5   <br><br> \\[\\Leftrightarrow &emsp; 5x^{2} + 6x + 1  = 0\\]   ";
    MathJax.typeset();
    }else{
    document.getElementById("tampil").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan cara faktor yaitu : <br>\\[\\left ( x - x_{1} \\right )\\left ( x - x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
    }
    MathJax.typeset();
  }
  
  