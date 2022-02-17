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
    if (jawaban1=="0" && jawaban2=="-3") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat Menggunakan Rumus Kuadratis atau Rumus abc yaitu :</b><br><br> Dengan diketahui :  <br><br>~ \\[a = 2\\]<br><br> ~ \\[b = 6\\]<br><br> ~ \\[c = 0\\]<br><br> \\[\\Leftrightarrow x = \\frac{- b \\pm \\sqrt{b^{2} - 4 a c} }{2 a}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm \\sqrt{6^{2} - \\left ( 4 \\cdot 2 \\cdot 0 \\right )}}{2\\cdot 2}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm \\sqrt{36 - 0}}{4}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm \\sqrt{36}}{4}\\]<br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm 6}{4}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 + 6}{4}\\] &emsp;atau&emsp; \\[ x = \\frac{-6 - 6}{4}\\] <br><br> \\[\\Leftrightarrow x = 0\\] &emsp;atau&emsp; \\[x = -3\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-3" && jawaban2=="0") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat Menggunakan Rumus Kuadratis atau Rumus abc yaitu :</b><br><br> Dengan diketahui :  <br><br>~ \\[a = 2\\]<br><br> ~ \\[b = 6\\]<br><br> ~ \\[c = 0\\]<br><br> \\[\\Leftrightarrow x = \\frac{- b \\pm \\sqrt{b^{2} - 4 a c} }{2 a}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm \\sqrt{6^{2} - \\left ( 4 \\cdot 2 \\cdot 0 \\right )}}{2\\cdot 2}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm \\sqrt{36 - 0}}{4}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm \\sqrt{36}}{4}\\]<br><br> \\[\\Leftrightarrow x = \\frac{-6 \\pm 6}{4}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-6 + 6}{4}\\] &emsp;atau&emsp; \\[ x = \\frac{-6 - 6}{4}\\] <br><br> \\[\\Leftrightarrow x = 0\\] &emsp;atau&emsp; \\[x = -3\\] ";
      MathJax.typeset();
      }
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br>  Rumus kuadratis atau rumua abc, yaitu : <br><br> \\[x = \\frac{- b \\pm \\sqrt{b^{2} - 4 a c} }{2 a}\\] <br><br> Dengan keterangan :<br><br> ~ koefisien \\[x^{2} = a\\] <br><br> ~ koefisien \\[x = b\\] <br><br> ~ konstanta \\[= c\\] ";
      MathJax.typeset();
    }
  } }
   }