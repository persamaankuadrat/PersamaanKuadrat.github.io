// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyBfwXa95Cbm2njpH4tJ-F0K4_ZHcNd8ySg",
    authDomain: "yulia-91249.firebaseapp.com",
    projectId: "yulia-91249",
    storageBucket: "yulia-91249.appspot.com",
    messagingSenderId: "595660344340",
    appId: "1:595660344340:web:04c0e93d76fc1855882b01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


let aktifklik = document.getElementById("aktifkuis1");
let valueaktif = document.getElementById("aktif").value;
let task = firebase.database().ref('kontrolevaluasi/');
let value = "";
let id="55555";
let taskz = firebase.database().ref('kontrolevaluasi/' +id);
// console.log("EVAL "+taskz)
aktifklik.addEventListener('click', function(){
    value=valueaktif;
    let valupdate={
        nilai:value
    }
    taskz.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik = document.getElementById("matikuis1");
let valuemati = document.getElementById("mati").value;
matiklik.addEventListener('click', function(){
    value=valuemati;
    let valupdate={
        nilai:value
    }
    taskz.set(valupdate)
    console.log("VALUE = "+ value);
})


// //Kuis 2
// let aktifklik2 = document.getElementById("aktifkuis2");
// let valueaktif2 = document.getElementById("aktif2").value;
// let task2 = firebase.database().ref('kontrol/');
// let value2 = "";
// let id2="1610132";
// let taskz2 = firebase.database().ref('kontrol/'+ id2);
// aktifklik2.addEventListener('click', function(){
//     value2=valueaktif2;
//     let valupdate2={
//         nilai:value2
//     }
//     taskz2.set(valupdate2)
//     console.log("VALUE = "+ value2);
// })

// let matiklik2 = document.getElementById("matikuis2");
// let valuemati2 = document.getElementById("mati2").value;
// matiklik.addEventListener('click', function(){
//     value2=valuemati2;
//     let valupdate2={
//         nilai:value2
//     }
//     taskz2.set(valupdate2)
//     console.log("VALUE = "+ value2);
// })

// window.onload=function(){
// task.on("child_added", function(data){
//     let values=data.val();
//     console.log("NILAI "+values.nilai)
//     console.log("Task "+task)
//     if(values.nilai==0){
//         document.getElementById("mati").checked = true;
//     }
//     else if(values.nilai==1){
//         document.getElementById("aktif").checked = true;
//     }
// });
// }

let aktifklik2 = document.getElementById("aktifquiz1");
let valueaktif2 = document.getElementById("aktif1").value;
let task2 = firebase.database().ref('kontrolkuis1/');
let value2 = "";
let id2="11111";
let taskz2 = firebase.database().ref('kontrolkuis1/' +id2);
// console.log("EVAL "+taskz)
aktifklik2.addEventListener('click', function(){
    value=valueaktif2;
    let valupdate={
        nilai:value
    }
    taskz2.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik2 = document.getElementById("matiquiz1");
let valuemati2 = document.getElementById("mati1").value;
matiklik2.addEventListener('click', function(){
    value=valuemati2;
    let valupdate={
        nilai:value
    }
    taskz2.set(valupdate)
    console.log("VALUE = "+ value);
})


// window.onload=function(){
// task2.on("child_added", function(data){
//     let values=data.val();
//     console.log("NILAI "+values.nilai)
//     console.log("Task "+task2)
//     if(values.nilai==0){
//         document.getElementById("mati1").checked = true;
//     }
//     else if(values.nilai==1){
//         document.getElementById("aktif1").checked = true;
//     }
// });
// }


//kontrol kuis2
let aktifklik3 = document.getElementById("aktifquiz2");
let valueaktif3 = document.getElementById("aktif2").value;
let task3 = firebase.database().ref('kontrolkuis2/');
let value3 = "";
let id3="22222";
let taskz3 = firebase.database().ref('kontrolkuis2/' +id3);
aktifklik3.addEventListener('click', function(){
    value=valueaktif3;
    let valupdate={
        nilai:value
    }
    taskz3.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik3 = document.getElementById("matiquiz2");
let valuemati3 = document.getElementById("mati2").value;
matiklik3.addEventListener('click', function(){
    value=valuemati3;
    let valupdate={
        nilai:value
    }
    taskz3.set(valupdate)
    console.log("VALUE = "+ value);
})

//kontrol kuis3
let aktifklik4 = document.getElementById("aktifquiz3");
let valueaktif4 = document.getElementById("aktif3").value;
let task4 = firebase.database().ref('kontrolkuis3/');
let value4 = "";
let id4="33333";
let taskz4 = firebase.database().ref('kontrolkuis3/' +id4);
aktifklik4.addEventListener('click', function(){
    value=valueaktif4;
    let valupdate={
        nilai:value
    }
    taskz4.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik4 = document.getElementById("matiquiz3");
let valuemati4 = document.getElementById("mati3").value;
matiklik4.addEventListener('click', function(){
    value=valuemati4;
    let valupdate={
        nilai:value
    }
    taskz4.set(valupdate)
    console.log("VALUE = "+ value);
})

//kontrol kuis4
let aktifklik5 = document.getElementById("aktifquiz4");
let valueaktif5 = document.getElementById("aktif4").value;
let task5 = firebase.database().ref('kontrolkuis4/');
let value5 = "";
let id5="44444";
let taskz5 = firebase.database().ref('kontrolkuis4/' +id5);
aktifklik5.addEventListener('click', function(){
    value=valueaktif5;
    let valupdate={
        nilai:value
    }
    taskz5.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik5 = document.getElementById("matiquiz4");
let valuemati5 = document.getElementById("mati4").value;
matiklik5.addEventListener('click', function(){
    value=valuemati5;
    let valupdate={
        nilai:value
    }
    taskz5.set(valupdate)
    console.log("VALUE = "+ value);
})

window.onload=function(){
    task.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI "+values.nilai)
        console.log("Task "+task)
        if(values.nilai==0){
            document.getElementById("mati").checked = true;
        }
        else if(values.nilai==1){
            document.getElementById("aktif").checked = true;
        }
    });

    task2.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI "+values.nilai)
        console.log("Task "+task2)
        if(values.nilai==0){
            document.getElementById("mati1").checked = true;
        }
        else if(values.nilai==1){
            document.getElementById("aktif1").checked = true;
        }
    });

    task3.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI "+values.nilai)
        console.log("Task "+task3)
        if(values.nilai==0){
            document.getElementById("mati2").checked = true;
        }
        else if(values.nilai==1){
            document.getElementById("aktif2").checked = true;
        }
    });

    task4.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI "+values.nilai)
        console.log("Task "+task4)
        if(values.nilai==0){
            document.getElementById("mati3").checked = true;
        }
        else if(values.nilai==1){
            document.getElementById("aktif3").checked = true;
        }
    });

    task5.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI "+values.nilai)
        console.log("Task "+task5)
        if(values.nilai==0){
            document.getElementById("mati4").checked = true;
        }
        else if(values.nilai==1){
            document.getElementById("aktif4").checked = true;
        }
    });
}