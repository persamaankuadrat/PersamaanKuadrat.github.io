
function checksalah() {

    console.log("salah");
    document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Rumus menyusun persamaan kuadrat dengan menggunakan rumus jumlah & hasil kali akar-akar yaitu : <br>\\[x^{2} - \\left ( x_{1} + x_{2} \\right ) + \\left ( x_{1} \\cdot x_{2} \\right ) = 0\\]<br>  ";
    MathJax.typeset();
  }
  function checkbenar() {
    console.log("benar");
    document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br> Persamaan kuadrat dari akar \\[x_{1} = 2\\] dan \\[x_{2} = -6\\] yakni \\[x^2 + 4x - 12 = 0\\]<br> berikut alur pembahasannya : <br><br> \\[\\Leftrightarrow &emsp; x^{2} - \\left ( x_{1} + x_{2} \\right ) + \\left ( x_{1} \\cdot x_{2} \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - \\left ( 2 + (-6) \\right ) + \\left ( 2 \\cdot (-6) \\right ) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} - (2 - 6) + (-12) = 0\\]<br><br>\\[\\Leftrightarrow &emsp; x^{2} - (-4) + (-12) = 0\\] <br><br> \\[\\Leftrightarrow &emsp; x^{2} + 4x - 12 = 0\\]   ";
    MathJax.typeset();
  }
  
  