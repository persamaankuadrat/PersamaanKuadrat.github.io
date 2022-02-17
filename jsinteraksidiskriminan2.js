
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

    if (i==18) {

      if(jawaban[18].value.length==1){

        if(jawaban[18].value==7){
          //box warna
          if (jawaban[18].className.indexOf('boxhijau') == -1) {
            if (jawaban[18].className.indexOf('boxmerah') == -1) {
              jawaban[18].className += ' boxhijau';
            } else {
              jawaban[18].className = jawaban[18].className.replace('boxmerah', 'boxhijau');
            }
          }
        
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut15').className = document.getElementById('lanjut15').className.replace('hilang','');
            
          }, 500) 
                } else{
                  if (jawaban[18].className.indexOf('boxmerah') == -1) {
                    if (jawaban[18].className.indexOf('boxhijau') == -1) {
                      jawaban[18].className += ' boxmerah';
                    } else {
                      jawaban[18].className = jawaban[18].className.replace('boxhijau', 'boxmerah');
                    }
                  }
                }
        
              }

    }
    if (i==19) {

      if(jawaban[19].value.length==1){

        if(jawaban[19].value==3){
          //box warna
          if (jawaban[19].className.indexOf('boxhijau') == -1) {
            if (jawaban[19].className.indexOf('boxmerah') == -1) {
              jawaban[19].className += ' boxhijau';
            } else {
              jawaban[19].className = jawaban[19].className.replace('boxmerah', 'boxhijau');
            }
          }
          
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut16').className = document.getElementById('lanjut16').className.replace('hilang','');
            
          }, 500)
        } else{
          if (jawaban[19].className.indexOf('boxmerah') == -1) {
            if (jawaban[19].className.indexOf('boxhijau') == -1) {
              jawaban[19].className += ' boxmerah';
            } else {
              jawaban[19].className = jawaban[19].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }
    if (i==20){

      if(jawaban[20].value.length==1){

        if(jawaban[20].value==7){
          //boxwarna

          if (jawaban[20].className.indexOf('boxhijau') == -1) {
            if (jawaban[20].className.indexOf('boxmerah') == -1) {
              jawaban[20].className += ' boxhijau';
            } else {
              jawaban[20].className = jawaban[20].className.replace('boxmerah', 'boxhijau');
            }
          }
         
            //lanjut
            setTimeout(function (){
                document.getElementById('lanjut17').className = document.getElementById('lanjut17').className.replace('hilang','');
                
              }, 500)

        } else{
          
          if (jawaban[20].className.indexOf('boxmerah') == -1) {
            if (jawaban[20].className.indexOf('boxhijau') == -1) {
              jawaban[20].className += ' boxmerah';
            } else {
              jawaban[20].className = jawaban[20].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==21){

      if(jawaban[21].value.length==1){

        if(jawaban[21].value==7){
          //boxwarna
          if (jawaban[21].className.indexOf('boxhijau') == -1) {
            if (jawaban[21].className.indexOf('boxmerah') == -1) {
              jawaban[21].className += ' boxhijau';
            } else {
              jawaban[21].className = jawaban[21].className.replace('boxmerah', 'boxhijau');
            }
          }

        } else{
          if (jawaban[21].className.indexOf('boxmerah') == -1) {
            if (jawaban[21].className.indexOf('boxhijau') == -1) {
              jawaban[21].className += ' boxmerah';
            } else {
              jawaban[21].className = jawaban[21].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==21){

      if(jawaban[21].value.length==1){

        if(jawaban[21].value==3){
          //boxwarna
         
          if (jawaban[21].className.indexOf('boxhijau') == -1) {
            if (jawaban[21].className.indexOf('boxmerah') == -1) {
              jawaban[21].className += ' boxhijau';
            } else {
              jawaban[21].className = jawaban[21].className.replace('boxmerah', 'boxhijau');
            }
          }
       

        } else{
          if (jawaban[21].className.indexOf('boxmerah') == -1) {
            if (jawaban[21].className.indexOf('boxhijau') == -1) {
              jawaban[21].className += ' boxmerah';
            } else {
              jawaban[21].className = jawaban[21].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==22){

      if(jawaban[22].value.length==1){

        if(jawaban[22].value==7){
          //boxwarna
          if (jawaban[22].className.indexOf('boxhijau') == -1) {
            if (jawaban[22].className.indexOf('boxmerah') == -1) {
              jawaban[22].className += ' boxhijau';
            } else {
              jawaban[22].className = jawaban[22].className.replace('boxmerah', 'boxhijau');
            }
          }
              //lanjut
              setTimeout(function (){
                document.getElementById('lanjut18').className = document.getElementById('lanjut18').className.replace('hilang','');
               
              }, 500)
        } else{
          if (jawaban[22].className.indexOf('boxmerah') == -1) {
            if (jawaban[22].className.indexOf('boxhijau') == -1) {
              jawaban[22].className += ' boxmerah';
            } else {
              jawaban[22].className = jawaban[22].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==23){

      if(jawaban[23].value.length==2){
    
        if(jawaban[23].value==49){
          //boxwarna
          console.log("ok")
          if (jawaban[23].className.indexOf('boxhijau') == -1) {
            if (jawaban[23].className.indexOf('boxmerah') == -1) {
              jawaban[23].className += ' boxhijau';
            } else {
              jawaban[23].className = jawaban[23].className.replace('boxmerah', 'boxhijau');
            }
          }
      
        } else{
         
          if (jawaban[23].className.indexOf('boxmerah') == -1) {
            if (jawaban[23].className.indexOf('boxhijau') == -1) {
              jawaban[23].className += ' boxmerah';
            } else {
              jawaban[23].className = jawaban[23].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==24){

      if(jawaban[24].value.length==3){

        if(jawaban[24].value==196){
          //boxwarna

          if (jawaban[24].className.indexOf('boxhijau') == -1) {
            if (jawaban[24].className.indexOf('boxmerah') == -1) {
              jawaban[24].className += ' boxhijau';
            } else {
              jawaban[24].className = jawaban[24].className.replace('boxmerah', 'boxhijau');
            }
          }
                //lanjut
             setTimeout(function (){
            document.getElementById('lanjut19').className = document.getElementById('lanjut19').className.replace('hilang','');
           
          }, 500)      
        } else{
 
          if (jawaban[24].className.indexOf('boxmerah') == -1) {
            if (jawaban[24].className.indexOf('boxhijau') == -1) {
              jawaban[24].className += ' boxmerah';
            } else {
              jawaban[24].className = jawaban[24].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }



    if(i==25){

      if(jawaban[25].value.length==4){

        if(jawaban[25].value==-147){
          //boxwarna
          if (jawaban[25].className.indexOf('boxhijau') == -1) {
            if (jawaban[25].className.indexOf('boxmerah') == -1) {
              jawaban[25].className += ' boxhijau';
            } else {
              jawaban[25].className = jawaban[25].className.replace('boxmerah', 'boxhijau');
            }
          }
              //lanjut
            setTimeout(function (){
            document.getElementById('lanjut20').className = document.getElementById('lanjut20').className.replace('hilang','');
          }, 500)
        } else{
          if (jawaban[25].className.indexOf('boxmerah') == -1) {
            if (jawaban[25].className.indexOf('boxhijau') == -1) {
              jawaban[25].className += ' boxmerah';
            } else {
              jawaban[25].className = jawaban[25].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    



    if(i==9){

      console.log("akhir");

    }


  })


}



function checksalah() {
  console.log("salah");
  document.getElementById("jawaban").innerHTML="<span style='color: red';>Jawaban Salah</span>";
}
function checkbenar() {
  console.log("benar");
  document.getElementById("jawaban").innerHTML="<span style='color: green';>Jawaban Benar</span>";
}

