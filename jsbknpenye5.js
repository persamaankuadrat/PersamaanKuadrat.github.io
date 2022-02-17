
function checksalah() {

  console.log("salah");
  document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Yang merupakan penyelesaian persamaan kuadrat adalah ketika kedua akar \\[(x_{1},x_{2})\\] memiliki pengganti \\[x\\] dengan hasil \\[0 = 0\\]<br>  ";
  MathJax.typeset();
}
function checkbenar() {
  console.log("benar");
  document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br>\\[1\\] dan \\[-3\\] merupakan penyelesaian persamaan kuadrat \\[2x^{2} + 4x - 16 = 0\\] berikut alur pembahasannya : <br><br> Persamaan kuadrat &emsp;\\[ \\Leftrightarrow &emsp; 2x^{2} + 4x - 6 = 0 \\] <br><br> Jika \\[x\\] diganti \\[1\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[2(1)^{2} + 4(1) - 6 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 2 + 4 - 6 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>. <br><br> Jika \\[x\\] diganti \\[-3\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[2(-3)^{2} + 4(-3) - 6 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 18 - 12 - 6 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>.   ";
  MathJax.typeset();
}