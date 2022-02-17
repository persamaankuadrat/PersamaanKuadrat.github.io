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
    if (jawaban1=="6" && jawaban2=="-1") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Faktorisasi:</b><br><br>\\[2x^{2} - 10x - 12 = 0\\] <br><br>\\[\\Leftrightarrow \\frac{1}{2} \\left ( 2x - 12 \\right )\\left ( 2x + 2 \\right ) = 0\\]<br><br>\\[\\Leftrightarrow \\left ( x - 6 \\right ) \\left ( 2x + 2 \\right )= 0\\] <br><br> \\[\\Leftrightarrow (x - 6) ( 2x + 2) = 0\\] <br><br> \\[\\Leftrightarrow x - 6 = 0\\]&emsp; atau &emsp;\\[ 2x + 2 = 0\\]<br><br>\\[\\Leftrightarrow x = 6\\] &emsp;atau&emsp; \\[x = -1\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-1" && jawaban2=="6") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Faktorisasi:</b><br><br>\\[2x^{2} - 10x - 12 = 0\\] <br><br>\\[\\Leftrightarrow \\frac{1}{2} \\left ( 2x - 12 \\right )\\left ( 2x + 2 \\right ) = 0\\]<br><br>\\[\\Leftrightarrow \\left ( x - 6 \\right ) \\left ( 2x + 2 \\right )= 0\\] <br><br> \\[\\Leftrightarrow (x - 6) ( 2x + 2) = 0\\] <br><br> \\[\\Leftrightarrow x - 6 = 0\\]&emsp; atau &emsp;\\[ 2x + 2 = 0\\]<br><br>\\[\\Leftrightarrow x = 6\\] &emsp;atau&emsp; \\[x = -1\\]  ";
      MathJax.typeset();
      }
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br> Rumus faktorisasi bentuk kuadrat \\[ax^{2} + bx + c = 0\\] dengan \\[a \\neq 1\\] yaitu : <br> \\[ax^{2} + bx + c = \\frac{1}{a} \\left ( ax + p \\right )\\left ( ax + q \\right )\\] <br><br> Dengan  \\[b = p + q\\] dan \\[c = p \\cdot q\\] ";
      MathJax.typeset();
    }
  } }
   }