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


window.load = function () {


}

let kmplanId = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
kuisfix = kuisnya.value;


function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    var task = firebase.database().ref(kuisfix);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "9A";
    } else if (kelasnya.value == "2") {
        kelasfix = "9B";
    } else if (kelasnya.value == "3") {
        kelasfix = "9C";
    } else if (kelasnya.value == "4") {
        kelasfix = "9D";
    } else if (kelasnya.value == "5") {
        kelasfix = "9E";
    } else if (kelasnya.value == "6") {
        kelasfix = "9F";
    } else if (kelasnya.value == "7") {
        kelasfix = "9G";
    } else if (kelasnya.value == "8") {
        kelasfix = "9H";
    } else if (kelasnya.value == "9") {
        kelasfix = "9I";
    } 

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri Banjarmasin";
    } 


    let jwbfixx = [];

    let jwb1 = ["b", "c", "a", "b", "d", "d", "a", "a", "d", "c", "a", "a", "c", "c", "a", "c", "c", "a", "b", "b" ];
    if (kuisfix == "pretest/") {
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class = "nah"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb1;
    }

    

    if ((sekolahfix != '') && (kelasfix != '')) {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();




            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });





    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
    kuis.value = value = "pretest/";
}




// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})