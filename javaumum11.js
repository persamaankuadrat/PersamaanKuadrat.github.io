
let input1 = document.getElementById("texta");
let input1a = document.getElementById("textb");
let input1b = document.getElementById("textc");

let btn1 = document.getElementById("ceka");
let btn1a = document.getElementById("cekb");
let btn1b = document.getElementById("cekc");

let aksi1 = document.getElementById("ketx1");
let aksi1a = document.getElementById("ketx2");
let aksi1b = document.getElementById("ketx3");

btn1.addEventListener("click",function(){
    if(input1.value == "2"){
        aksi1.innerHTML = `<img src="benar.png" >`
    }
    else{
        aksi1.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })

  btn1a.addEventListener("click",function(){
    if(input1a.value == "3" ){
        aksi1a.innerHTML = `<img src="benar.png" >`
    }
    else{
        aksi1a.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })

  btn1b.addEventListener("click",function(){
    if(input1b.value == "-2" ){
        aksi1b.innerHTML = `<img src="benar.png" >`
    }
    else{
        aksi1b.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })

  input1.addEventListener("keyup",function(){
    input1.value = input1.value.split(' ').join('');
  })

  input1a.addEventListener("keyup",function(){
    input1a.value = input1a.value.split(' ').join('');
  })

  input1b.addEventListener("keyup",function(){
    input1b.value = input1b.value.split(' ').join('');
  })
