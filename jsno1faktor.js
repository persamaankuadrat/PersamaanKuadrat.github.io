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
    if (jawaban1=="-7" && jawaban2=="-3") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Faktorisasi:</b><br><br>\\[x^{2} + 10x + 21 = 0\\] <br><br>\\[\\Leftrightarrow \\left ( x + 7 \\right ) \\left ( x + 3 \\right ) = 0\\]<br><br>\\[\\Leftrightarrow x + 7 = 0\\] atau \\[ x + 3 = 0\\]<br><br>\\[\\Leftrightarrow x = -7\\] atau \\[x = -3\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-3" && jawaban2=="-7") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Faktorisasi:</b><br><br>\\[x^{2} + 10x + 21 = 0\\] <br><br>\\[\\Leftrightarrow \\left ( x + 7 \\right ) \\left ( x + 3 \\right ) = 0\\]<br><br>\\[\\Leftrightarrow x + 7 = 0\\] atau \\[ x + 3 = 0\\]<br><br>\\[\\Leftrightarrow x = -7\\] atau \\[x = -3\\]";
      MathJax.typeset();
      }
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br> Rumus faktorisasi bentuk kuadrat \\[x^{2} + bx + c = \\left ( x + p \\right )\\left ( x + q \\right )\\] <br><br> Dengan  \\[b = p + q\\] dan \\[c = p \\cdot q\\] ";
      MathJax.typeset();
    }
  } }
   }