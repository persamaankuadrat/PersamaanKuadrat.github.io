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
    if (jawaban1=="7" && jawaban2=="-2") {
    document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Melengkapkan Kuadrat Sempurna :</b><br><br>\\[\\Leftrightarrow  4x^{2} - 20x - 56 = 0\\] <br><br> \\[\\Leftrightarrow \\frac{4x^{2} - 20x - 56 = 0}{2}\\]<br> <br> \\[\\Leftrightarrow x^{2} - 5x - 14 = 0\\]<br><br>\\[\\Leftrightarrow x^{2} - 5x = 14 \\]<br><br>\\[\\Leftrightarrow x^{2} - 5x + \\left ( \\frac{5}{2} \\right )^{2} = 14 + \\left ( \\frac{5}{2} \\right )^{2}\\] <br><br>\\[\\Leftrightarrow \\left ( x - \\frac{5}{2} \\right )^{2} = 14 + \\frac{25}{4}\\] <br><br> \\[\\Leftrightarrow x - \\frac{5}{2} = \\pm \\sqrt{\\frac{81}{4}}\\] <br><br> \\[\\Leftrightarrow x - \\frac{5}{2} = \\pm \\frac{9}{2}\\] <br><br>\\[\\Leftrightarrow x = \\frac{9}{2} + \\frac{5}{2} \\] &emsp; atau &emsp;\\[x = -\\frac{9}{2} + \\frac{5}{2} \\]<br><br>\\[\\Leftrightarrow x = 7\\] &emsp;atau&emsp; \\[x = -2\\]  ";
    MathJax.typeset();
    } else if (jawaban1!="" && jawaban2!="") {
      if (jawaban1=="-2" && jawaban2=="7") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br><b> Pembahasan Penyelesaian Persamaan Kuadrat dengan Cara Melengkapkan Kuadrat Sempurna :</b><br><br>\\[\\Leftrightarrow  4x^{2} - 20x - 56 = 0\\] <br><br> \\[\\Leftrightarrow \\frac{4x^{2} - 20x - 56 = 0}{2}\\]<br> <br> \\[\\Leftrightarrow x^{2} - 5x - 14 = 0\\]<br><br>\\[\\Leftrightarrow x^{2} - 5x = 14 \\]<br><br>\\[\\Leftrightarrow x^{2} - 5x + \\left ( \\frac{5}{2} \\right )^{2} = 14 + \\left ( \\frac{5}{2} \\right )^{2}\\] <br><br>\\[\\Leftrightarrow \\left ( x - \\frac{5}{2} \\right )^{2} = 14 + \\frac{25}{4}\\] <br><br> \\[\\Leftrightarrow x - \\frac{5}{2} = \\pm \\sqrt{\\frac{81}{4}}\\] <br><br> \\[\\Leftrightarrow x - \\frac{5}{2} = \\pm \\frac{9}{2}\\] <br><br>\\[\\Leftrightarrow x = \\frac{9}{2} + \\frac{5}{2} \\] &emsp; atau &emsp;\\[x = -\\frac{9}{2} + \\frac{5}{2} \\]<br><br>\\[\\Leftrightarrow x = 7\\] &emsp;atau&emsp; \\[x = -2\\]   ";
      MathJax.typeset();
      }
    else {
      document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, <br><b>Ingat!!</b> <br><br> Langkah-langkah menyelesaikan persamaan kuadrat dengan cara melengkapkan kuadrat sempurna yakni : <br><br> 1. Jika ditemukan koefisien \\[x^{2}\\] tidak sama dengan satu seperti persamaan \\[2x^{2} - 2x - 12 = 0\\], maka persamaan kuadrat tersebut harus dibagi dua agar \\[x^{2}\\] menjadi sama dengan satu, seperti berikut : <br> \\[\\Leftrightarrow 4x^{2} - 20x - 56 = 0 \\] <br><br> \\[\\Leftrightarrow \\frac{4x^{2} - 20x - 56 = 0}{2}\\]<br> <br> \\[\\Leftrightarrow x^{2} - 5x - 14 = 0\\]<br><br> 2. Langkah selanjutnya sama dengan yang sebelumnya yakni tempatkan suku-suku yang mengandung variabel di ruas kiri dan konstanta di ruas kanan <br><br> 3. Koefisien \\[x^{2}\\] harus sama dengan satu. <br><br> 4. Tambahkan kedua ruas dengan kuadrat dari setengah koefisien \\[x\\] atau \\[+ \\left ( \\frac{...}{2} \\right )^{2}\\] pada koefisien \\[x\\], sehingga ruas kiri menjadi kuadrat sempurna. <br><br> 5. Kemudian setelah kuadrat berubah menjadi akar pada ruas kanan, tambahkan \\[\\pm \\]. ";
      MathJax.typeset();
    }
  } }
   }