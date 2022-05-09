
function cek1(){
  form.jawaban.value= "A";
  }
  function cek2(){
  form.jawaban.value= "B";
  }
  function cek3(){
    form.jawaban.value= "C";
    }


  function cekjawaban(){
  if(form.jawaban.value=='C'|| form.jawaban.value=='c'){
  document.getElementById("tampil").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br><br> Dikarenakan \\[D < 0\\], maka persamaan kuadrat tidak mempunyai akar real. <br><br> \\[D = b^{2} - 4ac\\] <br><br> \\[D = \\left ( 10 \\right )^{2} - \\left ( 4\\cdot 4\\cdot 11 \\right )\\] <br><br> \\[D = 100 - 176 )\\] <br><br> \\[D = - 76\\] <br><br> Sehingga, \\[D < 0\\]";
  MathJax.typeset();
  }else{
  document.getElementById("tampil").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br><b>Ingat! </b><br><br>Jika D > 0, maka persamaan kuadrat mempunyai 2 akar real berbeda. <br><br>Jika D = 0, maka persamaan kuadrat mempunyai 1 akar real yang sama (kembar). <br><br>Jika D < 0, maka persamaan kuadrat tidak mempunyai akar real <br><br> Dengan rumus diskriminan \\[D = b^{2} - 4ac\\] ";
  MathJax.typeset();
  }
  MathJax.typeset();
}
