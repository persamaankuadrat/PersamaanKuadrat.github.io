
function checksalah() {

  console.log("salah");
  document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Yang merupakan penyelesaian persamaan kuadrat adalah ketika kedua akar \\[(x_{1},x_{2})\\] memiliki pengganti \\[x\\] dengan hasil \\[0 = 0\\]<br> <b> Pembahasan :</b> <br><br> Dikarenakan ketika \\[x\\] diganti dengan \\[-5\\] menghasilkan \\[12 = 0\\] sehingga bernilai <b>Salah</b>. <br>Jika \\[x\\] diganti \\[-5 &emsp;&emsp; \\Leftrightarrow &emsp;&emsp; x^{2} + 3x + 2 = 0 \\] <br><br> \\[(-5)^{2} + 3x + 2 = 0\\] <br><br>\\[25 - 15 + 2 = 0\\] <br><br> \\[12 = 0\\] ";
  MathJax.typeset();
}
function checkbenar() {
  console.log("benar");
  document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br>\\[-5\\] dan \\[-1\\] merupakan bukan penyelesaian kuadrat \\[x^{2} + 3x + 2 = 0\\] berikut alur pembahasannya : <br><br> Persamaan kuadrat &emsp;\\[ \\Leftrightarrow &emsp; x^{2} + 3x + 2 = 0 \\] <br><br> Jika \\[x\\] diganti \\[-1\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(-1)^{2} + 3(-1) + 2 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 1 - 3 + 2 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>. <br><br> Jika \\[x\\] diganti \\[-5\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(-5)^{2} + 3(-5) + 2 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 25 - 15 + 2 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 12 = 0\\]&emsp;&emsp; <b>(salah)</b>.   ";
  MathJax.typeset();
}

