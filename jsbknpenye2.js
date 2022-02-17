
function checksalah() {

  console.log("salah");
  document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Yang merupakan penyelesaian persamaan kuadrat adalah ketika kedua akar \\[(x_{1},x_{2})\\] memiliki pengganti \\[x\\] dengan hasil \\[0 = 0\\]<br>  ";
  MathJax.typeset();
}
function checkbenar() {
  console.log("benar");
  document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br>\\[-5\\] dan \\[-1\\] merupakan penyelesaian persamaan kuadrat \\[x^{2} + 5x + 4 = 0\\] berikut alur pembahasannya : <br><br> Persamaan kuadrat &emsp;\\[ \\Leftrightarrow &emsp; x^{2} + 5x + 4 = 0 \\] <br><br> Jika \\[x\\] diganti \\[-4\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(-4)^{2} + 5(-4) + 4 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 16 - 20 + 4 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>. <br><br> Jika \\[x\\] diganti \\[-1\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(-1)^{2} + 5(-1) + 4 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 1 - 5 + 4 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>.   ";
  MathJax.typeset();
}

