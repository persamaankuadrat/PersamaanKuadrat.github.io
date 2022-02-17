// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyBfwXa95Cbm2njpH4tJ-F0K4_ZHcNd8ySg",
    authDomain: "yulia-91249.firebaseapp.com",
    projectId: "yulia-91249",
    storageBucket: "yulia-91249.appspot.com",
    messagingSenderId: "595660344340",
    appId: "1:595660344340:web:04c0e93d76fc1855882b01"
  };

  firebase.initializeApp(firebaseConfig);


window.load = function () {
}

function readlah() {
    var task = firebase.database().ref("kuis2/");

    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    let kelasfix = '';
    let sekolahfix = '';


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

    if ((sekolahfix != '') && (kelasfix != '')) {
       task.orderByChild("hari").on("child_added", function(data){
        //task.on("child_added", function (data) {
            var taskvalue = data.val();
            console.log(taskvalue)

            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else if (sekolahfix != '') {
        task.orderByChild("hari").on("child_added", function(data){
        //task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
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
