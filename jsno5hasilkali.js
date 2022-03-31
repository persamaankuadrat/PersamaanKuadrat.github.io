
function checksalah() {

    console.log("salah");
    document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan menggunakan rumus jumlah & hasil kali akar-akar yaitu : <br>\\[x^{2} - \\left ( x_{1} + x_{2} \\right ) + \\left ( x_{1} \\cdot x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
  }
  function checkbenar() {
    console.log("benar");
    document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = -9\\] dan \\[x_{2} = -9\\] yakni \\[x^2 + 18x + 81 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp; x^{2} - \\left ( x_{1} + x_{2} \\right ) + \\left ( x_{1} \\cdot x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - \\left ( (-9) + (-9) \\right ) + \\left ( (-9) \\cdot (-9) \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - (-18) + 81 = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} + 18x + 81 = 0\\]   ";
    MathJax.typeset();
  }
  
  