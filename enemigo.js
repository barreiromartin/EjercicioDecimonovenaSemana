class enemigo extends personaje {
    constructor(nombre, vida, vidaMax, ataque, nivel, experiencia) {
        super(nombre, vida, vidaMax, ataque, nivel, experiencia);
        this.experiencia = 3;
    }
}