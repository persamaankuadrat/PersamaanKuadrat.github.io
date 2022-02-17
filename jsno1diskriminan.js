
function checksalah() {

  console.log("salah");
  document.getElementById("jawaban").innerHTML="<b style='color: red'>Jawabanmu Salah!</b> <br><b>Ingat! </b><br><br>Jika D > 0, maka persamaan kuadrat mempunyai 2 akar real berbeda. <br><br>Jika D = 0, maka persamaan kuadrat mempunyai 1 akar real yang sama (kembar). <br><br>Jika D < 0, maka persamaan kuadrat tidak mempunyai akar real <br><br> Dengan rumus diskriminan \\[D = b^{2} - 4ac\\] ";
  MathJax.typeset();
}
function checkbenar() {
  console.log("benar");
  document.getElementById("jawaban").innerHTML="<b style='color: green'>Jawabanmu Benar ^_^</b> <br><br> Dikarenakan \\[D > 0\\], maka persamaan kuadrat mempunyai 2 akar real berbeda. <br><br> \\[D = b^{2} - 4ac\\] <br><br> \\[D = \\left ( 1 \\right )^{2} - \\left ( 4\\cdot 2\\cdot (-3) \\right )\\] <br><br> \\[D = 1 - \\left ( - 24 \\right )\\] <br><br> \\[D = 1 + 24 = 25\\] <br><br> Sehingga, \\[D > 0\\]";
  MathJax.typeset();
}

