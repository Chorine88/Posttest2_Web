let tombol = document.getElementById("login");
tombol.onclick = masuk

function masuk(e){
    e.preventDefault() 
    const nama = document.getElementById("log_nama").value;
    const nim = document.getElementById("log_nim").value;

    const lo_nama = localStorage.getItem("nama")
    const lo_nim = localStorage.getItem("nim")

    if (nama == lo_nama && nim == lo_nim ){
        alert("Welcome");
        window.location.href = "index.html";
    }
    else {
        alert("Failed");
    }
}