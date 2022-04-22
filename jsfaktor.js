

let jawaban = document.querySelectorAll('.input1');
let icon = document.querySelectorAll('.icon');

for (let i=0; i<jawaban.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawaban[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawaban[i].addEventListener('keyup', function(){

    if (jawaban[i].value.length == 0) {
      if(jawaban[i].className.indexOf('boxhijau') == -1){
        jawaban[i].className = jawaban[i].className.replace('boxmerah', "");
      }
      if (jawaban[i].className.indexOf('boxmerah') == -1){
        jawaban[i].className = jawaban[i].className.replace('boxhijau', "");
      }
    }

    if (i==0) {

      if(jawaban[0].value.length==1){

        if(jawaban[0].value==1){
          //box warna
          if (jawaban[0].className.indexOf('boxhijau') == -1) {
            if (jawaban[0].className.indexOf('boxmerah') == -1) {
              jawaban[0].className += ' boxhijau';
            } else {
              jawaban[0].className = jawaban[0].className.replace('boxmerah', 'boxhijau');
            }
          }
        
          //lanjut
               
                } else{
                  if (jawaban[0].className.indexOf('boxmerah') == -1) {
                    if (jawaban[0].className.indexOf('boxhijau') == -1) {
                      jawaban[0].className += ' boxmerah';
                    } else {
                      jawaban[0].className = jawaban[1].className.replace('boxhijau', 'boxmerah');
                    }
                  }
                }
        
              }

    }
    if (i==1) {

      if(jawaban[1].value.length==2){

        if(jawaban[1].value==-3){
          //box warna
          if (jawaban[1].className.indexOf('boxhijau') == -1) {
            if (jawaban[1].className.indexOf('boxmerah') == -1) {
              jawaban[1].className += ' boxhijau';
            } else {
              jawaban[1].className = jawaban[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
            
          }, 500)
        } else{
          if (jawaban[1].className.indexOf('boxmerah') == -1) {
            if (jawaban[1].className.indexOf('boxhijau') == -1) {
              jawaban[1].className += ' boxmerah';
            } else {
              jawaban[1].className = jawaban[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }
    if (i==2){

      if(jawaban[2].value.length==1){

        if(jawaban[2].value==1){
          //boxwarna

          if (jawaban[2].className.indexOf('boxhijau') == -1) {
            if (jawaban[2].className.indexOf('boxmerah') == -1) {
              jawaban[2].className += ' boxhijau';
            } else {
              jawaban[2].className = jawaban[2].className.replace('boxmerah', 'boxhijau');
            }
          }
         
        } else{
          
          if (jawaban[2].className.indexOf('boxmerah') == -1) {
            if (jawaban[2].className.indexOf('boxhijau') == -1) {
              jawaban[2].className += ' boxmerah';
            } else {
              jawaban[2].className = jawaban[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==3){

      if(jawaban[3].value.length==2){

        if(jawaban[3].value==-3){
          //boxwarna
          if (jawaban[3].className.indexOf('boxhijau') == -1) {
            if (jawaban[3].className.indexOf('boxmerah') == -1) {
              jawaban[3].className += ' boxhijau';
            } else {
              jawaban[3].className = jawaban[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          setTimeout(function (){
            document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
            
          }, 500)
        } else{
          if (jawaban[3].className.indexOf('boxmerah') == -1) {
            if (jawaban[3].className.indexOf('boxhijau') == -1) {
              jawaban[3].className += ' boxmerah';
            } else {
              jawaban[3].className = jawaban[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==4){

      if(jawaban[4].value.length==1){

        if(jawaban[4].value==1){
          //boxwarna
         
          if (jawaban[4].className.indexOf('boxhijau') == -1) {
            if (jawaban[4].className.indexOf('boxmerah') == -1) {
              jawaban[4].className += ' boxhijau';
            } else {
              jawaban[4].className = jawaban[4].className.replace('boxmerah', 'boxhijau');
            }
          }
       

          // setTimeout(function (){
          //   document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
            
          // }, 500)
        } else{
          if (jawaban[4].className.indexOf('boxmerah') == -1) {
            if (jawaban[4].className.indexOf('boxhijau') == -1) {
              jawaban[4].className += ' boxmerah';
            } else {
              jawaban[4].className = jawaban[4].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==5){

      if(jawaban[5].value.length==2){

        if(jawaban[5].value==-3){
          //boxwarna
          if (jawaban[5].className.indexOf('boxhijau') == -1) {
            if (jawaban[5].className.indexOf('boxmerah') == -1) {
              jawaban[5].className += ' boxhijau';
            } else {
              jawaban[5].className = jawaban[5].className.replace('boxmerah', 'boxhijau');
            }
          }
        //lanjut
        setTimeout(function (){
          document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
        
        }, 500)
        } else{
          if (jawaban[5].className.indexOf('boxmerah') == -1) {
            if (jawaban[5].className.indexOf('boxhijau') == -1) {
              jawaban[5].className += ' boxmerah';
            } else {
              jawaban[5].className = jawaban[5].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==6){

      if(jawaban[6].value.length==1){
    
        if(jawaban[6].value==1){
          //boxwarna
          console.log("ok")
          if (jawaban[6].className.indexOf('boxhijau') == -1) {
            if (jawaban[6].className.indexOf('boxmerah') == -1) {
              jawaban[6].className += ' boxhijau';
            } else {
              jawaban[6].className = jawaban[6].className.replace('boxmerah', 'boxhijau');
            }
          }
         
        } else{
         
          if (jawaban[6].className.indexOf('boxmerah') == -1) {
            if (jawaban[6].className.indexOf('boxhijau') == -1) {
              jawaban[6].className += ' boxmerah';
            } else {
              jawaban[6].className = jawaban[6].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==7){

      if(jawaban[7].value.length==2){

        if(jawaban[7].value==-3){
          //boxwarna

          if (jawaban[7].className.indexOf('boxhijau') == -1) {
            if (jawaban[7].className.indexOf('boxmerah') == -1) {
              jawaban[7].className += ' boxhijau';
            } else {
              jawaban[7].className = jawaban[7].className.replace('boxmerah', 'boxhijau');
            }
          }
            //lanjut
          setTimeout(function (){
            document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
           
          }, 500)         
        } else{
 
          if (jawaban[7].className.indexOf('boxmerah') == -1) {
            if (jawaban[7].className.indexOf('boxhijau') == -1) {
              jawaban[7].className += ' boxmerah';
            } else {
              jawaban[7].className = jawaban[7].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }



    if(i==8){

      if(jawaban[8].value.length==1){

        if(jawaban[8].value==1){
          //boxwarna
          if (jawaban[8].className.indexOf('boxhijau') == -1) {
            if (jawaban[8].className.indexOf('boxmerah') == -1) {
              jawaban[8].className += ' boxhijau';
            } else {
              jawaban[8].className = jawaban[8].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          // setTimeout(function (){
          //   document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
           
          // }, 500)
        } else{
          if (jawaban[8].className.indexOf('boxmerah') == -1) {
            if (jawaban[8].className.indexOf('boxhijau') == -1) {
              jawaban[8].className += ' boxmerah';
            } else {
              jawaban[8].className = jawaban[8].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==9){

      if(jawaban[9].value.length==2){

        if(jawaban[9].value==-3){
          //boxwarna
          if (jawaban[9].className.indexOf('boxhijau') == -1) {
            if (jawaban[9].className.indexOf('boxmerah') == -1) {
              jawaban[9].className += ' boxhijau';
            } else {
              jawaban[9].className = jawaban[9].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
          }, 500)
        } else{

          if (jawaban[9].className.indexOf('boxmerah') == -1) {
            if (jawaban[9].className.indexOf('boxhijau') == -1) {
              jawaban[9].className += ' boxmerah';
            } else {
              jawaban[9].className = jawaban[9].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }
    if(i==10){

      if(jawaban[10].value.length==2){

        if(jawaban[10].value==-1){
          //boxwarna
          if (jawaban[10].className.indexOf('boxhijau') == -1) {
            if (jawaban[10].className.indexOf('boxmerah') == -1) {
              jawaban[10].className += ' boxhijau';
            } else {
              jawaban[10].className = jawaban[9].className.replace('boxmerah', 'boxhijau');
            }
          }
          // lanjut
          // setTimeout(function (){
          //   document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
          // }, 500)
        } else{

          if (jawaban[10].className.indexOf('boxmerah') == -1) {
            if (jawaban[10].className.indexOf('boxhijau') == -1) {
              jawaban[10].className += ' boxmerah';
            } else {
              jawaban[10].className = jawaban[10].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }
    if(i==11){

      if(jawaban[11].value.length==1){

        if(jawaban[11].value==3){
          //boxwarna
          if (jawaban[11].className.indexOf('boxhijau') == -1) {
            if (jawaban[11].className.indexOf('boxmerah') == -1) {
              jawaban[11].className += ' boxhijau';
            } else {
              jawaban[11].className = jawaban[11].className.replace('boxmerah', 'boxhijau');
            }
          }
          
          lanjut
          setTimeout(function (){
            document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
          }, 500)
        } else{

          if (jawaban[11].className.indexOf('boxmerah') == -1) {
            if (jawaban[11].className.indexOf('boxhijau') == -1) {
              jawaban[11].className += ' boxmerah';
            } else {
              jawaban[11].className = jawaban[11].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }



    if(i==12){

      console.log("akhir");

    }


  })


}



// function checksalah() {
//   console.log("salah");
//   document.getElementById("jawaban").innerHTML="<span style='color: red';>jawaban salah</span>";
// }
// function checkbenar() {
//   console.log("benar");
//   document.getElementById("jawaban").innerHTML="<span style='color: green';>jawaban benar</span>";
// }

