let button = document.getElementById("daftar");
button.onclick = daftar

function daftar(e){
    e.preventDefault() 
    const nama = document.getElementById("daf_nama").value;
    const nim = document.getElementById("daf_nim").value;

    localStorage.setItem("nama", nama)
    localStorage.setItem("nim", nim)
    alert("Berhasil Daftar");
}
