
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "5") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Diketahuhi \\[x_{1} + x_{2} = 10\\], kemudian subtsitusikan kedalam rumus menjadi : <br> \\[x_{1} + x_{2} = - \\frac{b}{a}\\] <br><br> \\[10 = \\frac{- \\left ( -4p \\right )}{2}\\] <br><br> \\[10 = \\frac{4p}{2}\\] <br><br> \\[10 = 2p\\] <br><br> \\[p = \\frac{10}{2} = 5\\]";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> Subtsitusikan hasil dari \\[x_{1} + x_{2} = 10\\] kedalam rumus penjumlahan akar-akar persamaan kuadrat sehingga menjadi : <br><br>  \\[x_{1} + x_{2} = - \\frac{b}{a}\\] <br><br> \\[10 = \\frac{- \\left ( -4p \\right )}{2}\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      