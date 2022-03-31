
function checksalah() {

    console.log("salah");
    document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan cara faktor yaitu : <br>\\[\\left ( x - x_{1} \\right )\\left ( x - x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
  }
  function checkbenar() {
    console.log("benar");
    document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = -\\frac{1}{3}\\] dan \\[x_{2} = -\\frac{3}{5}\\] yakni \\[15x^2 + 14x + 3 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - x_{1} \\right ) \\left ( x - x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - (-\\frac{1}{3}) \\right ) \\left ( x - (-\\frac{3}{5}) \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; \\left ( x + \\frac{1}{3} \\right ) \\left ( x + \\frac{3}{5} \\right ) = 0\\]<br><br>\\[\\Leftrightarrow &emsp; x^{2} + \\frac{3}{5}x + \\frac{1}{3}x + \\frac{3}{15} = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} + \\frac{14}{15}x + \\frac{3}{15} = 0 \\]<br><br> \\[\\Leftrightarrow &emsp;  \\left [ x^{2} + \\frac{14}{15}x + \\frac{3}{15} = 0 \\right ] \\] \\[\\times\\] 15   <br><br> \\[\\Leftrightarrow &emsp; 15x^{2} + 14x + 3  = 0\\]   ";
    MathJax.typeset();
  }
  
  