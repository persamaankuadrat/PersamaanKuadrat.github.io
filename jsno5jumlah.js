
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "-36") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br>  Dikarenakan rumus dari : <br><br>\\[x_{1}^{3} + x_{2}^{3} = \\left ( x_{1} + x_{2} \\right )^{3} - 3x_{1}\\cdot x_{2} \\left ( x_{1} + x_{2} \\right )\\]  maka, langkah 1 : <br><br> \\[ x_{1} + x_{2} = \\frac{-b}{a} = \\frac{-\\left ( -3 \\right )}{1} = 3\\] <br><br> langkah 2 : \\[x_{1} \\cdot  x_{2} = \\frac{c}{a} = \\frac{5}{1} = 5\\] <br><br> langkah 3 : \\[x_{1}^{3} + x_{2}^{3} = \\left ( x_{1} + x_{2} \\right )^{3} - 3x_{1}\\cdot x_{2} \\left ( x_{1} + x_{2} \\right )\\] <br><br> langkah 4 : \\[\\left ( 3 \\right )^{3} - 3\\cdot 5\\left ( 3 \\right )= 9 - 45 = -36\\] ";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b> Ingat!! </b> <br><br> Rumus penyelesaiannya yaitu : <br><br> \\[x_{1}^{3} + x_{2}^{3} = \\left ( x_{1} + x_{2} \\right )^{3} - 3x_{1}\\cdot x_{2} \\left ( x_{1} + x_{2} \\right )\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      