function checksalah() {

  console.log("salah");
  document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Yang merupakan penyelesaian persamaan kuadrat adalah ketika kedua akar \\[(x_{1},x_{2})\\] memiliki pengganti \\[x\\] dengan hasil \\[0 = 0\\]<br>  ";
  MathJax.typeset();
}
function checkbenar() {
  console.log("benar");
  document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br>\\[2\\] dan \\[3\\] merupakan bukan penyelesaian persamaan kuadrat \\[x^{2} + 9x + 18 = 0\\] berikut alur pembahasannya : <br><br> Persamaan kuadrat &emsp;\\[ \\Leftrightarrow &emsp; x^{2} + 9x + 18 = 0 \\] <br><br> Jika \\[x\\] diganti \\[2\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(2)^{2} + 9(2) + 18 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 4 + 18 + 18 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 40 = 0\\]&emsp;&emsp; <b>(salah)</b>. <br><br> Jika \\[x\\] diganti \\[3\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(3)^{2} + 9(3) + 18 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 9 + 27 + 18 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 54 = 0\\]&emsp;&emsp; <b>(salah)</b>.   ";
  MathJax.typeset();
}