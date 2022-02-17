
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "45") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br>  Dikarenakan rumus dari : <br><br>\\[x_{1}^{2} + x_{2}^{2} = \\left ( x_{1} + x_{2} \\right )^{2} - 2 x_{1} \\cdot x_{2}\\]  maka, <br><br> \\[\\left ( 9 \\right )^{2} - 2 \\left ( 18 \\right )\\] <br><br> \\[81 - 36 = 45\\] ";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b> Ingat!! </b> <br><br> Rumus penyelesaiannya yaitu : <br><br> \\[x_{1}^{2} + x_{2}^{2} = \\left ( x_{1} + x_{2} \\right )^{2} - 2 x_{1} \\cdot x_{2}\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      