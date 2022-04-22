
function cek1(){
  form.jawaban.value= "A";
  }
  function cek2(){
  form.jawaban.value= "B";
  }

  function cekjawaban(){
  if(form.jawaban.value=='A'|| form.jawaban.value=='a'){
  document.getElementById("tampil").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br>\\[2\\] dan \\[5\\] merupakan penyelesaian persamaan kuadrat \\[x^{2} - 7x + 10 = 0\\] berikut alur pembahasannya : <br><br> Persamaan kuadrat &emsp;\\[ \\Leftrightarrow &emsp; x^{2} - 7x + 10 = 0 \\] <br><br> Jika \\[x\\] diganti \\[2\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(2)^{2} - 7(2) + 10 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 4 - 14 + 10 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>. <br><br> Jika \\[x\\] diganti \\[5\\]&emsp;\\[\\Leftrightarrow\\]&emsp;\\[(5)^{2} - 7(5) + 10 = 0\\] <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 25 - 35 + 10 = 0\\] <br><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\[\\Leftrightarrow 0 = 0\\]&emsp;&emsp; <b>(benar)</b>.   ";
  MathJax.typeset();
  }else{
  document.getElementById("tampil").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br>Ingat! Yang merupakan penyelesaian persamaan kuadrat adalah ketika kedua akar \\[(x_{1},x_{2})\\] memiliki pengganti \\[x\\] dengan hasil \\[0 = 0\\]<br>  ";
  MathJax.typeset();
  }
  MathJax.typeset();
}