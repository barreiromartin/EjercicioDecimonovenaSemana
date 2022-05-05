function numeroRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//BOTONES TAMAÑO
function preload() {
    //TAMAÑO FUENTE
    var cuerpo = document.getElementById("cuerpo");
    var tamFuente = localStorage.getItem("tamFuente");
    cuerpo.style.fontSize = tamFuente;
    var radio = document.getElementsByClassName("tamTexto");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == tamFuente) {
            radio[i].checked = true;
        } else {
            radio[i].checked = false;
        }
    }

    //COLOR HEROE
    var heroe = document.getElementsByClassName("heroe");
    var colorElegido = localStorage.getItem("heroeColorRandom")
    for (var i = 0; i < heroe.length; i++) {
        heroe[i].style.color = colorElegido;
    }
    //NO SE CHECKEA
    for (var i = 0; i < heroe.length; i++) {
        if (heroe[i].style.color == colorElegido) {
            heroe[i].checked = true;
        } else {
            heroe[i].checked = false;
        }
    }

    //TEXTAREA
    var textArea = document.getElementById("textArea");
    var textoGuardado = localStorage.getItem("textArea");
    if (textoGuardado != "") {
        textArea.value = textoGuardado;
    }

    //FONDO PERSONAJES
    var heroe = document.getElementsByClassName("heroe");
    var heroeFondo = document.getElementById("heroeFondo")
    if(localStorage.getItem("fondoHeroe") == true){
        heroeFondo.checked = true;
    }else{
        heroeFondo.checked = false;
    }    
}

function nombreHeroe() {
    var nombreExiste = localStorage.getItem("nombreHeroe")

    if (nombreExiste) {
        var opcion = parseInt(prompt("¿Deseas Consevar el nombre de Heroe?\n1 - Si\n2 - Nuevo Nombre"))

        switch (opcion) {
            case 2:
                nombre = prompt("Introduce el nombre de tu Heroe");
                break;
            default:
                nombre = localStorage.getItem("nombreHeroe");
                break;
        }
    } else {
        nombre = prompt("Introduce el nombre de tu heroe");
    }
    localStorage.setItem("nombreHeroe", nombre);
    return nombre
}





function cambiaTexto(event) {
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.style.fontSize = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("tamFuente", event.currentTarget.value);
}




function cambiarColorHeroe(event) {
    var heroe = document.getElementsByClassName("heroe");
    for (var i = 0; i < heroe.length; i++) {
        heroe[i].style.color = event.currentTarget.value;
    }

    localStorage.setItem("heroeColorRandom", event.currentTarget.value);
}




function fondoColor(event) {
    var personaje = document.getElementsByClassName("heroe")
    for (i = 0; i < personaje.length; i++) {
        personaje[i].style.background = event.currentTarget.value;
    }
    localStorage.setItem("fondoHeroe", true)
}




function fondoLimpiar(event) {
    var personaje = document.getElementsByClassName("heroe")
    for (i = 0; i < personaje.length; i++) {
        personaje[i].style.background = "none";
    }
    
    localStorage.setItem("fondoHeroe", false)
}




function limpiarTodo(){
   localStorage.clear();
}












































