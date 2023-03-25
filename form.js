// Coba 1
// let button = document.getElementById("daftarr");
// button.onclick = daftar

// function daftar(e){
//     e.preventDefault() 
//     const nama = document.getElementById("nama").value;
//     const nim = document.getElementById("nim").value;
//     const email = document.getElementById("email").value;

//     localStorage.setItem("nama", nama)
//     localStorage.setItem("nim", nim)
//     localStorage.setItem("email", email)

//     alert("Berhasil Mendaftar");
// }





// Coba 2
// const nama = document.querySelector('#nama');
// const nim = document.querySelector('#nim');
// const email = document.querySelector('#email');
// const daftarr = document.querySelector('#daftarr');
// const batal = document.querySelector('#batal');

// if(localStorage.getItem('data')== null) {
//     localStorage.setItem('data', '[]');
// }

// daftarr.onclick = () => {
//     var penyimpanan = JSON.parse(localStorage.getItem('data'));
//     penyimpanan.push(nama.value);
//     penyimpanan.push(nim.value);
//     penyimpanan.push(email.value);

//     localStorage.setItem('data', JSON.stringify(penyimpanan));

//     window.location.href = "data.html";

//     alert("Berhasil Daftar");
//     hasil.innerHTML = JSON.parse(localStorage.getItem('data'));

// }




// Coba 3
// let button = document.getElementById("daftarr");
// button.onclick = daftar

// function daftar(e){
//     e.preventDefault() 
//     const nama = document.getElementById("nama").value;
//     const nim = document.getElementById("nim").value;
//     const email = document.getElementById("email").value;

//     sessionStorage.setItem("nama", nama)
//     sessionStorage.setItem("nim", nim)
//     sessionStorage.setItem("email", email)

//     alert("Berhasil Mendaftar");
// }






const form = document.getElementById("form");
const nama = document.getElementById("nama");
const nim = document.getElementById("nim");
const email = document.getElementById("email");
const kelamin = document.getElementById("kelamin");
const angkatan = document.getElementById("angkatan");



form.addEventListener('submit', function(e){
    e.preventDefault(); 

    const namaValue = nama.value;
    const nimValue = nim.value;
    const emailValue = email.value;
    const angkatanValue = angkatan.value;
    const kelaminValue = kelamin.value;

    sessionStorage.setItem("nama", namaValue);
    sessionStorage.setItem("nim", nimValue);
    sessionStorage.setItem("email", emailValue);
    sessionStorage.setItem("angkatan", angkatanValue);
    sessionStorage.setItem("kelamin", kelaminValue);


})


if(sessionStorage.getItem('data')== null) {
        sessionStorage.setItem('data', '[]');
    }
    
    daftarr.onclick = () => {
        var penyimpanan = JSON.parse(sessionStorage.getItem('data'));
        penyimpanan.push(nama.value);
        penyimpanan.push(nim.value);
        penyimpanan.push(email.value);
        penyimpanan.push(angkatan.value);
        penyimpanan.push(kelamin.value);
    
        sessionStorage.setItem('data', JSON.stringify(penyimpanan));
    
        window.location.href = "data.html";
    
        alert("Berhasil Daftar");
        hasil.innerHTML = JSON.parse(sessionStorage.getItem('data'));
    
    }



    document.getElementById("kelamin").addEventListener('submit', function(e){
    e.preventDefault(); 

    let kelass;

    if (document.getElementById("laki-laki").checked){
        kelass = document.getElementById("laki-laki").value;
    }
    else {
        kelass = document.getElementById("perempuan").value;
    }
    
    sessionStorage.setItem("infoKelamin", kelamin);
});