
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "-3") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Diketahuhi \\[a = 1, b = - ( 2n - 6) = 2n + 6\\], dan \\[c = n + 1\\] mempunyai dua akar yang saling berlawanan maka \\[b = 0\\] <br><br> \\[b = 0\\] <br><br> \\[2n + 6 = 0\\] <br><br> \\[2n = - 6 \\] <br><br> \\[n = - \\frac{6}{2}\\] <br><br>\\[n = - 3 \\] <br><br>  Maka, nilai \\[n\\] yang saling berlawanan adalah \\[-3\\]";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b>Ingat !</b> <br><br> Jika kedua akar berlawanan \\[\\left ( x_{1} = - x_{2} \\right )\\] maka : \\[b = 0\\] <br><br> kemudian masukkan nilai \\[a\\],\\[b\\], dan \\[c\\] dari soal tersebut kedalam rumus \\[b = 0\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      