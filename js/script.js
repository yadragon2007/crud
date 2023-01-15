//Date
const date = new Date();
document.getElementById('year').innerHTML = date.getFullYear();
document.getElementById('month').innerHTML = date.getMonth() + 1;
document.getElementById('day').innerHTML = date.getDate();

//sell
let sell = document.getElementById('sell');
let reset = document.getElementById('reset');
let retrieval = document.getElementById('retrieval');
let cansel = document.getElementById('cansel');
let searchInput = document.getElementById('sip');
let countInput = document.getElementById('cip');
let endRFail = document.getElementById('endRFail');
let rDoneCansel = document.getElementById('rDoneCansel');

sell.onclick = function () {
    document.querySelector('.bill').style.display = 'flex';
}
cansel.onclick = function () {
    document.querySelector('.retrieval').style.display = 'none';
    document.querySelector('.bill').style.display = 'none';
}
reset.onclick = function () {
    searchInput.value = '';
    countInput.value = '';
}
retrieval.onclick = function () {
    document.querySelector('.retrieval').style.display = 'flex';
}
rDoneCansel.onclick = function () {
    document.querySelector('.retrieval').style.display = 'none';
}
endRFail.onclick = function () {
    document.querySelector('.retrieval').style.display = 'none';
}

//history range
let ryear = document.getElementById('ryear');
let rmonth = document.getElementById('rmonth');
let rday = document.getElementById('rday');
let rhour = document.getElementById('rhour');
let rminutes = document.getElementById('rminutes');
let rampm = document.getElementById('rampm');
let resetRang = document.getElementById('rehi');
ryear.onchange = function () {
    document.getElementById('upy').innerHTML = ryear.value;
}
rmonth.onchange = function () {
    document.getElementById('upm').innerHTML = rmonth.value;
}
rday.onchange = function () {
    document.getElementById('upd').innerHTML = rday.value;
}
rhour.onchange = function () {
    document.getElementById('uph').innerHTML = rhour.value;
}
rminutes.onchange = function () {
    document.getElementById('upmi').innerHTML = rminutes.value;
}
rampm.onchange = function () {
    if (rampm.value == 1) {
        document.getElementById('uppmam').innerHTML = "am";
    } else {
        document.getElementById('uppmam').innerHTML = "pm";
    }
}
resetRang.onclick = ()=>{
    ryear.value = '20000000';
    rmonth.value = '0';
    rday.value = '0';
    rhour.value = '0';
    rminutes.value = '0';
    rampm.value = '0';
    document.getElementById('upy').innerHTML = '';
    document.getElementById('upm').innerHTML = '';
    document.getElementById('upd').innerHTML = '';
    document.getElementById('uph').innerHTML = '';
    document.getElementById('upmi').innerHTML = '';
    document.getElementById('uppmam').innerHTML = '';
}
//workers

let sudwe = 0;
let mdwe = 0;
let tudwe = 0;
let wdwe = 0;
let thdwe = 0;
let fdwe = 0;
let sawe = 0;

let closeWorkerDetails = document.getElementById('cwd');
let openWorkerDetails = document.getElementById('dwtb');

let changePasswordBar = document.getElementById('chbw');
let changePasswordCh = [document.getElementById('chbw1'), document.getElementById('chbw2'), 
                       document.getElementById('chbw3'), document.getElementById('chbw4')];

let addAccount = document.getElementById('adac');
let addAccountCh = [document.getElementById('adac1'), document.getElementById('adac2')];

let editStoreNameImage = document.getElementById('esnsi');
let editStoreNameImageCh = [document.getElementById('esnsi1'), document.getElementById('esnsi2')];

let selectAccount = document.getElementById('sab');
let selectAccountch =  [document.getElementById('sab1'), document.getElementById('sab2')];

function weekEnd(day) {
    if (day == 'sudwe') {
        if (sudwe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            sudwe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            sudwe = 0;
        }
    } else if (day == 'mdwe') {
        if (mdwe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            mdwe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            mdwe = 0;
        }
    } else if (day == 'tudwe') {
        if (tudwe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            tudwe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            tudwe = 0;
        }
    } else if (day == 'wdwe') {
        if (wdwe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            wdwe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            wdwe = 0;
        }
    } else if (day == 'thdwe') {
        if (thdwe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            thdwe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            thdwe = 0;
        }
    } else if (day == 'fdwe') {
        if (fdwe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            fdwe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            fdwe = 0;
        }
    } else if (day == 'sawe') {
        if (sawe == 0) {
            document.getElementById(day).style.transform = "scale(1.5)";
            document.getElementById(day).style.backgroundColor = '#c4cdd4';
            sawe = 1;
        } else {
            document.getElementById(day).style.transform = "scale(1)";
            document.getElementById(day).style.backgroundColor = '#f0f8ff';
            sawe = 0;
        }
    }
}

openWorkerDetails.onclick = () => {
    document.querySelector('.detailsOfWorker').style.display = 'flex';
}

closeWorkerDetails.onclick = () => {
    document.querySelector('.detailsOfWorker').style.display = 'none';
}

function settingBar(id) {
    if (document.querySelector(`#${id} i`).style.transform == 'rotate(0deg)') {
        document.querySelector(`#${id} i`).style.transform = 'rotate(90deg)';
        if (id == changePasswordBar.id) {
            for (let i = 0; i < changePasswordCh.length; i++) {
                changePasswordCh[i].style.display = 'flex';
            }
        }else if (id == addAccount.id) {
            for (let i = 0; i < addAccountCh.length; i++) {
                addAccountCh[i].style.display = 'flex';
            }
        }else if (id == editStoreNameImage.id) {
            for (let i = 0; i < editStoreNameImageCh.length; i++) {
                editStoreNameImageCh[i].style.display = 'flex';
            }
        }else if (id == selectAccount.id) {
            for (let i = 0; i < selectAccountch.length; i++) {
                selectAccountch[i].style.display = 'flex';
            }
        }
    } else {
        document.querySelector(`#${id} i`).style.transform = 'rotate(0deg)';
        if (id == changePasswordBar.id) {
            for (let i = 0; i < changePasswordCh.length; i++) {
                changePasswordCh[i].style.display = 'none';
            }
        }else if (id == addAccount.id) {
            for (let i = 0; i < addAccountCh.length; i++) {
                addAccountCh[i].style.display = 'none';
            }
        }else if (id == editStoreNameImage.id) {
            for (let i = 0; i < editStoreNameImageCh.length; i++) {
                editStoreNameImageCh[i].style.display = 'none';
            }
        }else if (id == selectAccount.id) {
            for (let i = 0; i < selectAccountch.length; i++) {
                selectAccountch[i].style.display = 'none';
            }
        }
    }
}
function apchpad(){
    document.querySelector('#cpwipas1').style.display = 'flex';
    document.querySelector('#cpwipas2').style.display = 'none';
    document.querySelector('#cpwipas3').style.display = 'none';
    document.querySelector('#cpwipas4').style.display = 'none';
}
function adacgg(){
    document.querySelector('#cpwipas1').style.display = 'none';
    document.querySelector('#cpwipas2').style.display = 'flex';
    document.querySelector('#cpwipas3').style.display = 'none';
    document.querySelector('#cpwipas4').style.display = 'none';
}
function esp(){
    document.querySelector('#cpwipas1').style.display = 'none';
    document.querySelector('#cpwipas2').style.display = 'none';
    document.querySelector('#cpwipas3').style.display = 'flex';
    document.querySelector('#cpwipas4').style.display = 'none';
}
function cansels(){
    document.getElementById('cpwipas2').style.display = 'none';
    document.getElementById('cpwipas1').style.display = 'none';
    document.querySelector('#cpwipas3').style.display = 'none';
    document.querySelector('#cpwipas4').style.display = 'none';
}

let rangeAddAccount = document.getElementById('bs');

rangeAddAccount.onchange = ()=>{
    if (rangeAddAccount.value == 1) {
        document.getElementById('labelBs').innerHTML = 'storage';
    } else {
        document.getElementById('labelBs').innerHTML = 'branch';
    }
}

//store logo
const image_input = document.querySelector("#image_input");
let storeLogo = document.querySelector('.cpwipas img');
var uploaded_image;

image_input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        storeLogo.src = `${uploaded_image}`;
    });
    reader.readAsDataURL(this.files[0]);
});