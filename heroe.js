class heroe extends personaje {
    constructor(nombre, vida, vidaMax, ataque, nivel) {
        super(nombre, vida, vidaMax, ataque, nivel);
        this.experiencia = 0;
        this.defensa = 5;
    }


    //SETTERS

    set setExperiencia(experiencia) {
        this.Experiencia = experiencia;
    }

    //FUNCIONES

    experienciaObtenida(valor) {
        var nueva_exp = this.experiencia + valor;
        if(nueva_exp >= 10){
            do{
                this.nivel++;
                this.experiencia = nueva_exp - 10;
                return alert("¡El héroe sube al nivel " + this.nivel + "!");
            }while(nueva_exp >= 10)
        }else{
            this.experiencia += valor;
        }
        
    }
}
