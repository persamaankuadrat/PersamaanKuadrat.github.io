function myFunction() {
  let jawaban1=document.getElementById("myText1").value.split(' ').join('');
  let jawaban2=document.getElementById("myText2").value.split(' ').join('');
  
  if (jawaban1=="" && jawaban2=="") {
    document.getElementById("demo").innerHTML = "Silahkan masukkan jawaban terlebih dahulu, jawaban tidak boleh kosong";
  } else if (jawaban1!="" && jawaban2=="") {
    document.getElementById("demo").innerHTML = "Jawabanmu masih ada yang kosong";
  } else if (jawaban1=="" && jawaban2!="") {
    document.getElementById("demo").innerHTML = "Jawabanmu masih  ada yang kosong";
  } else if (jawaban1!="" && jawaban2!="") {
    if (jawaban1=="1" && jawaban2=="-9") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Melengkapkan Kuadrat Sempurna :</b><br><br>\\[\\Leftrightarrow  x^{2} + 8x - 9 = 0\\] <br><br>\\[\\Leftrightarrow x^{2} + x = 9\\]<br><br>\\[\\Leftrightarrow x^{2} + 8x + \\left ( \\frac{8}{2} \\right )^{2} = 9 + \\left ( \\frac{8}{2} \\right )^{2}\\] <br><br>\\[\\Leftrightarrow \\left ( x + 4 \\right )^{2} = \\frac{100}{4}\\] <br><br> \\[\\Leftrightarrow x + 4 = \\pm \\sqrt{25}\\] <br><br> \\[\\Leftrightarrow x + 4 = 5\\]&emsp; atau &emsp;\\[ x + 4 = -5\\]<br><br>\\[\\Leftrightarrow x = 1\\] &emsp;atau&emsp; \\[x = -9\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-9" && jawaban2=="1") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Melengkapkan Kuadrat Sempurna :</b><br><br>\\[\\Leftrightarrow  x^{2} + 8x - 9 = 0\\] <br><br>\\[\\Leftrightarrow x^{2} + x = 9\\]<br><br>\\[\\Leftrightarrow x^{2} + 8x + \\left ( \\frac{8}{2} \\right )^{2} = 9 + \\left ( \\frac{8}{2} \\right )^{2}\\] <br><br>\\[\\Leftrightarrow \\left ( x + 4 \\right )^{2} = \\frac{100}{4}\\] <br><br> \\[\\Leftrightarrow x + 4 = \\pm \\sqrt{25}\\] <br><br> \\[\\Leftrightarrow x + 4 = 5\\]&emsp; atau &emsp;\\[ x + 4 = -5\\]<br><br>\\[\\Leftrightarrow x = 1\\] &emsp;atau&emsp; \\[x = -9\\]  ";
      MathJax.typeset();
      }
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br> Langkah-langkah menyelesaikan persamaan kuadrat dengan cara melengkapkan kuadrat sempurna yakni : <br><br> 1. Tempatkan suku-suku yang mengandung variabel di ruas kiri dan konstanta di ruas kanan <br><br> 2. Koefisien \\[x^{2}\\] harus sama dengan satu. <br><br> 3. Tambahkan kedua ruas dengan kuadrat dari setengah koefisien \\[x\\] atau \\[+ \\left ( \\frac{...}{2} \\right )^{2}\\] pada koefisien \\[x\\], sehingga ruas kiri menjadi kuadrat sempurna. <br><br> 4. Kemudian setelah kuadrat berubah menjadi akar pada ruas kanan, tambahkan \\[\\pm \\]. ";
      MathJax.typeset();
    }
  } }
   }