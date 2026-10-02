class Animal {
    #nombre;

    constructor(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    cambiarNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    hacerSonido() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log("Guau guau");
    }
}

class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log("Miau miau");
    }
}

let perro = new Perro("Max");
let gato = new Gato("Michi");

console.log("Nombre del perro:", perro.getNombre());
perro.hacerSonido();

console.log("Nombre del gato:", gato.getNombre());
gato.hacerSonido();

perro.cambiarNombre("Rocky");

console.log("Nuevo nombre del perro:", perro.getNombre());