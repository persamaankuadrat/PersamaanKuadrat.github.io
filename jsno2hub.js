
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "7") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Diketahuhi \\[a = m + 1, b = -8,\\] dan \\[c = 2\\] mempunyai akar kembar maka \\[D = 0\\] <br><br> \\[D = 0\\] <br><br> \\[b^{2} - 4 a c = 0\\] <br><br> \\[\\left ( -8 \\right )^{2} - 4 \\cdot \\left ( m +1 \\right )\\cdot 2 = 0\\] <br><br> \\[64 - 8m - 8 = 0\\] <br><br> \\[-8m = -56\\] <br><br> \\[m = \\frac{-56}{-8} = 7\\] <br><br> Maka, nilai \\[m\\] adalah 7";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b>Ingat !</b> <br><br> akar kembar : \\[D = 0\\] <br><br>  \\[b^{2} - 4 a c = 0\\] <br><br> kemudian masukkan nilai \\[a\\],\\[b\\], dan \\[c\\] dari soal tersebut kedalam rumus \\[D = 0\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      