const nama = sessionStorage.getItem('nama');
const nim = sessionStorage.getItem('nim');
const email = sessionStorage.getItem('email');
const angkatan = sessionStorage.getItem('angkatan');
const kelamin = sessionStorage.getItem('kelamin');

document.getElementById('nama').textContent = nama;
document.getElementById('nim').textContent = nim;
document.getElementById('email').textContent = email;
document.getElementById('angkatan').textContent = angkatan;
document.getElementById('kelamin').textContent = kelamin;




// form()
// function form(){
//     let data = sessionStorage.getItem("data");
//     data = JSON.parse(data);
//     const nama = data['nama'];
//     const email = data['email'];
//     const checkbox = data['checkbox'];
//     const nim = data['nim'];
//     const radio = data['radio'];
//     const Gender = data['Gender'];
    
//     const userInputNama = document.getElementById('nama_form');
//     const userInputEmail = document.getElementById('email_form');
//     const userInputCheckbox = document.getElementById('checkbox_form');
//     const userInputNim = document.getElementById('nim_form');
//     const userInputRadio = document.getElementById('radio_form');  
//     const userInputGender = document.getElementById('gender_form');

//     userInputNama.innerHTML =     "Nama                                     : " + nama;
//     userInputEmail.innerHTML =    "Email                                    : " + email;
//     userInputNim.innerHTML =   "Nim                                   : " + pesan;
//     userInputRadio.innerHTML =    "Paket                                    : " + radio;
//     userInputGender.innerHTML=     "Jenis Kelamin                            : " + Gender;
//     userInputCheckbox.innerHTML = "Pastikan data anda benar !               : " + checkbox;
// }