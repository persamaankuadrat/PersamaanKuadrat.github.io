
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "0") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Diketahuhi \\[a = 1, b = - ( 2m - 6) = 2m + 6,\\] dan \\[c = m + 1\\] mempunyai dua akar yang saling berkebalikan maka \\[a = c\\] <br><br> \\[a = c\\] <br><br> \\[1 = m + 1\\] <br><br> \\[1 - 1 = m\\] <br><br> \\[m = 0\\] <br><br>  Maka, nilai \\[m\\] yang saling berkebalikan adalah 0";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b>Ingat !</b> <br><br> Jika kedua akar berkebalikan \\[\\left ( x_{1} = \\frac{1}{x_{2}} \\right )\\] maka : \\[a = c\\] <br><br> kemudian masukkan nilai \\[a\\],\\[b\\], dan \\[c\\] dari soal tersebut kedalam rumus \\[a = c\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      