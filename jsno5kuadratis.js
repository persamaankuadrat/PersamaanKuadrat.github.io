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
    if (jawaban1=="2" && jawaban2=="-6") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat Menggunakan Rumus Kuadratis atau Rumus abc yaitu :</b><br><br> Dengan diketahui :  <br><br>~ \\[a = 2\\]<br><br> ~ \\[b = 8\\]<br><br> ~ \\[c = -30\\]<br><br> \\[\\Leftrightarrow x = \\frac{- b \\pm \\sqrt{b^{2} - 4 a c} }{2 a}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-(8) \\pm \\sqrt{8^{2} - \\left ( 4 \\cdot 2 \\cdot (-24) \\right )}}{2\\cdot 2}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-8 \\pm \\sqrt{ 64 - (-192)}}{4}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-8 \\pm \\sqrt{256}}{4}\\]<br><br>  \\[\\Leftrightarrow x = \\frac{-8 + 16}{4}\\] &emsp;atau&emsp; \\[ x = \\frac{-8 - 16}{4}\\]<br><br> \\[\\Leftrightarrow x = 2\\] &emsp;atau&emsp; \\[x = -6\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-6" && jawaban2=="2") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat Menggunakan Rumus Kuadratis atau Rumus abc yaitu :</b><br><br> Dengan diketahui :  <br><br>~ \\[a = 2\\]<br><br> ~ \\[b = 8\\]<br><br> ~ \\[c = -30\\]<br><br> \\[\\Leftrightarrow x = \\frac{- b \\pm \\sqrt{b^{2} - 4 a c} }{2 a}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-(8) \\pm \\sqrt{8^{2} - \\left ( 4 \\cdot 2 \\cdot (-24) \\right )}}{2\\cdot 2}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-8 \\pm \\sqrt{ 64 - (-192)}}{4}\\] <br><br> \\[\\Leftrightarrow x = \\frac{-8 \\pm \\sqrt{256}}{4}\\]<br><br>  \\[\\Leftrightarrow x = \\frac{-8 + 16}{4}\\] &emsp;atau&emsp; \\[ x = \\frac{-8 - 16}{4}\\]<br><br> \\[\\Leftrightarrow x = 2\\] &emsp;atau&emsp; \\[x = -6\\]  ";
      MathJax.typeset();
      }
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br>  Rumus kuadratis atau rumua abc, yaitu : <br><br> \\[x = \\frac{- b \\pm \\sqrt{b^{2} - 4 a c} }{2 a}\\] <br><br> Dengan keterangan :<br><br> ~ koefisien \\[x^{2} = a\\] <br><br> ~ koefisien \\[x = b\\] <br><br> ~ konstanta \\[= c\\] ";
      MathJax.typeset();
    }
  } }
   }