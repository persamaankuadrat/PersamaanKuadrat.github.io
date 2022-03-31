
function checksalah() {

    console.log("salah");
    document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan cara faktor yaitu : <br>\\[\\left ( x - x_{1} \\right )\\left ( x - x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
  }
  function checkbenar() {
    console.log("benar");
    document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = 1\\] dan \\[x_{2} = 4\\] yakni \\[x^2 - 5x + 4 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - x_{1} \\right ) \\left ( x - x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp;\\left ( x - 1 \\right ) \\left ( x - 4 \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - 4x - x + 4 = 0\\]<br><br>\\[\\Leftrightarrow &emsp; x^{2} - 5x + 4 = 0\\]    ";
    MathJax.typeset();
  }
  
  