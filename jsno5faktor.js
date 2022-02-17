function myFunction() {
  let jawaban1=document.getElementById("myText1").value.split(' ').join('');
  let jawaban2=document.getElementById("myText2").value.split(' ').join('');
  
  if (jawaban1=="" && jawaban2=="") {
    document.getElementById("demo").innerHTML = "Silahkan masukkan jawaban terlebih dahulu, jawaban tidak boleh kosong";
  } else if (jawaban1!="" && jawaban2=="") {
    document.getElementById("demo").innerHTML = "Jawabanmu masih ada yang kosong";
  } else if (jawaban1=="" && jawaban2!="") {
    document.getElementById("demo").innerHTML = "Jawabanmu masih ada yang kosong";
  } else if (jawaban1!="" && jawaban2!="") {
    if (jawaban1=="0" && jawaban2=="-2") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Faktorisasi:</b><br><br>\\[2x^{2}  + 4x = 0\\] <br><br>\\[\\Leftrightarrow 2x \\left ( x + 2 \\right ) = 0 \\]<br><br>\\[\\Leftrightarrow 2x  = 0\\]&emsp; atau&emsp; \\[ x + 2 = 0\\]<br><br>\\[\\Leftrightarrow x = 0\\] &emsp;atau&emsp; \\[x = -2\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-2" && jawaban2=="0") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Faktorisasi:</b><br><br>\\[2x^{2}  + 4x = 0\\] <br><br>\\[\\Leftrightarrow 2x \\left ( x + 2 \\right ) = 0 \\]<br><br>\\[\\Leftrightarrow 2x  = 0\\]&emsp; atau&emsp; \\[ x + 2 = 0\\]<br><br>\\[\\Leftrightarrow x = 0\\] &emsp;atau&emsp; \\[x = -2\\]  ";
      MathJax.typeset();
      } 
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br> Jika \\[p \\cdot q = 0\\], maka \\[p = 0\\] atau \\[q = 0\\] atau \\[p = q = 0\\]. Sebagai contoh bila \\[x ( x - 1)\\], maka \\[x = 0\\]&nbsp; atau &nbsp; \\[x = 1\\] ";
      MathJax.typeset();
    }
  } }
   }