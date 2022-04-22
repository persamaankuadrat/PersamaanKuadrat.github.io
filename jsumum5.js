function cek1(){
  form.jawaban.value= "A";
  }
  function cek2(){
  form.jawaban.value= "B";
  }
  function cek3(){
  form.jawaban.value= "C";
  }

  // function cekjawaban(){
  //   if(form.jawaban.value=='A'){
  //   document.getElementById("tampil").innerHTML="Selamat! jawabanmu benar";
  //   document.getElementById("tampil").style.color = "green";
  //   }else{
  //   document.getElementById("tampil").innerHTML="Jawabanmu salah!!<br> Ingat : <br>Jika D > 0, maka persamaan kuadrat mempunyai 2 akar real berbeda. <br>Jika D = 0, maka persamaan kuadrat mempunyai 1 akar real yang sama (kembar). <br>Jika D < 0, maka persamaan kuadrat tidak mempunyai akar real";
  //   document.getElementById("tampil").style.color = "red";
  //   }
  // }

function cek11(){
  form.jawaban2.value= "A";
  }
  function cek22(){
  form.jawaban2.value= "B";
  }
  function cek33(){
  form.jawaban2.value= "C";
  }

  // function cekjawaban2(){
  //   if(form.jawaban2.value=='B'){
  //     document.getElementById("tampil2").innerHTML="Selamat! jawabanmu benar";
  //     document.getElementById("tampil2").style.color = "green";
  //     }else{
  //     document.getElementById("tampil2").innerHTML="Jawabanmu salah!!<br> Ingat : <br>Jika D > 0, maka persamaan kuadrat mempunyai 2 akar real berbeda. <br>Jika D = 0, maka persamaan kuadrat mempunyai 1 akar real yang sama (kembar). <br>Jika D < 0, maka persamaan kuadrat tidak mempunyai akar real";
  //     document.getElementById("tampil2").style.color = "red";
  //   }
  // }

function cek111(){
  form.jawaban3.value= "A";
  }
  function cek222(){
  form.jawaban3.value= "B";
  }
  function cek333(){
  form.jawaban3.value= "C";
  }

  function cekjawaban3(){

    if(form.jawaban.value=='C' || form.jawaban.value=='c'){
      document.getElementById("tampil").innerHTML="<b style='color: green'>Selamat! jawabanmu benar ^-^ </b><br> Variabel dari persamaan kuadrat \\[-x^{2} - 9 - x = 0\\] adalah \\[x^{2} , x\\]";

      }else{
      document.getElementById("tampil").innerHTML="<b style='color: red'>Jawabanmu Salah!</b><br> Ingat : <br> Ingat! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya dengan jelas";
      MathJax.typeset();
    }
    if(form.jawaban2.value=='B' || form.jawaban2.value=='b'){
      document.getElementById("tampil2").innerHTML="<b style='color: green'>Selamat! jawabanmu benar ^-^ </b><br> Koefisien dari persamaan kuadrat \\[-x^{2} - 9 - x = 0\\] adalah \\[-1 , -1\\]";
      // document.getElementById("tampil2").style.color = "green";
      }else{
      document.getElementById("tampil2").innerHTML="<b style='color: red'>Jawabanmu Salah!</b><br> Ingat : <br> Ingat! Koefisien adalah bilangan pada bentuk aljabar yang mengandung variabel";
      // document.getElementById("tampil2").style.color = "red";
      MathJax.typeset();
    }
    if(form.jawaban3.value=='C' || form.jawaban3.value=='c'){
      document.getElementById("tampil3").innerHTML="<b style='color: green'>Selamat! jawabanmu benar ^-^ </b><br> Konstanta dari persamaan kuadrat \\[-x^{2} - 9 - x = 0\\] adalah \\[-9\\]";
      }else{
      document.getElementById("tampil3").innerHTML="<b style='color: red'>Jawabanmu Salah!</b><br> Ingat : <br> Ingat! Konstanta adalah suku dari suatu bentuk aljabar yang berupa bilangan dan tidak memuat variabel atau bisa dikatakan dia hanya berdiri sendiri tanpa variabel ";
      MathJax.typeset();
    }
    MathJax.typeset();
}