
    function myFunction1() {
        var x = document.getElementById("myText1").value.split(' ').join('');
           var jawaban;
           if (x == "-1") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> <b> Pembahasan: </b> <br><br> Diketahuhi \\[a = 2, b = q - 3\\], dan \\[c = 1 - q^{2}\\] mempunyai dua akar yang saling berkebalikan maka \\[a = c\\] <br><br> \\[a = c\\] <br><br> \\[2 = 1 - q^{2}\\] <br><br> \\[2 - 1 = - q^{2}\\] <br><br> \\[1 = - q^{2}\\] <br><br> \\[\\sqrt{1} = - q\\] <br><br>\\[1 = -q\\] <br><br>\\[q = -\\frac{1}{1}\\] <br><br> \\[q = -1\\]<br><br>  Maka, nilai \\[q\\] yang saling berkebalikan adalah \\[-1\\]";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu salah</b> <br><br> <b>Ingat !</b> <br><br> Jika kedua akar berkebalikan \\[\\left ( x_{1} = \\frac{1}{x_{2}} \\right )\\] maka : \\[a = c\\] <br><br> kemudian masukkan nilai \\[a\\],\\[b\\], dan \\[c\\] dari soal tersebut kedalam rumus \\[a = c\\]";
           }
            MathJax.typeset();
    
    
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      