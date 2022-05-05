function estiloTexto() {
    var cuerpo = document.getElementById("cuerpo");
    var checkbox = document.getElementsByClassName("estiloTexto");

    //negrita
    if (checkbox[0].checked) {
        cuerpo.style.fontWeight = checkbox[0].value;
        localStorage.setItem("negrita", checkbox[0].value)
    } else {
        cuerpo.style.fontWeight = "normal";
        localStorage.setItem("negrita", "normal")
    }

    if (checkbox[1].checked) {
        cuerpo.style.fontStyle = checkbox[1].value;
        localStorage.setItem("cursiva", checkbox[1].value)
    } else {
        cuerpo.style.fontStyle = "normal";
        localStorage.setItem("cursiva", "normal")
    }
}

