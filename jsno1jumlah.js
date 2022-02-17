
    function myFunction1() {
    var x = document.getElementById("myText1").value.split(' ').join('');
       var jawaban;
       if (x == "4") {
         jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Dikarenakan rumus dari penjumlahan akar-akar persamaan kuadarat yaitu : \\[x_{1} + x_{2} = \\frac{ - b }{ a }\\] maka, <br><br> \\[x_{1} + x_{2} = \\frac{ - b }{ a } = \\frac{ - \\left ( -4 \\right )}{ 1 } = 4\\]";
       } else if (x =="") {
         jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
       } else {
         jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b> Ingat!! </b> <br><br> Rumus dari penjumlahan akar-akar persamaan kuadarat yaitu : <br><br> \\[x_{1} + x_{2} = \\frac{ - b }{ a }\\]";
       }
        MathJax.typeset();


       document.getElementById("demo").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  
  function myFunction2() {
    var x = document.getElementById("myText2").value.split(' ').join('');
       var jawaban;
       if (x == "3") {
         jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Dikarenakan rumus dari perkalian akar-akar persamaan kuadarat yaitu : \\[x_{1} \\cdot x_{2} = \\frac{c}{a}\\] maka, <br><br> \\[x_{1} \\cdot x_{2} = \\frac{c}{a} = \\frac{3}{1} = 3\\] ";
       } else if (x =="") {
         jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
       } else {
         jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b> Ingat!! </b> <br><br> Rumus dari perkalian akar-akar persamaan kuadarat yaitu : <br><br> \\[x_{1} \\cdot x_{2} = \\frac{c}{a}\\]";
       }
       document.getElementById("demo").innerHTML = jawaban;
       MathJax.typeset();
  }


