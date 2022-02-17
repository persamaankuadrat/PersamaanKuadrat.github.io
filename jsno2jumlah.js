
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "12") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Dikarenakan rumus dari : \\[\\frac{1}{x_{1}} + \\frac{1}{x_{2}} \\] maka, <br><br> \\[\\frac{1}{x_{1}} + \\frac{1}{x_{2}} = \\frac{x_{1} + x_{2}}{x_{1} \\cdot x_{2}} = \\frac{18}{\\frac{3}{2}} = 12\\]";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b> Ingat!! </b> <br><br> Rumus penyelesaiannya yaitu : <br><br> \\[\\frac{1}{x_{1}} + \\frac{1}{x_{2}} = \\frac{x_{1} + x_{2}}{x_{1} \\cdot x_{2}} \\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      