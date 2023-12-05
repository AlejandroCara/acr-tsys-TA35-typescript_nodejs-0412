export abstract class Persona {
    private nombre: string = "";
    private edad: number = 0;
    private sexo: string = "";

    constructor(nombre: string, edad: number, sexo: string){
        this.nombre = nombre;
        this.setEdad(edad);
        this.setSexo(sexo);
    }

    public getNombre = (): string => {
        return this.nombre;
    }

    public setNombre = (nombre: string): void => {
        this.nombre = nombre;
    }

    public getEdad = (): number => {
        return this.edad;
    }

    public setEdad = (edad: number): void => {
        if (edad > 0 && edad < 110) {
            this.edad = edad;
        }
    }

    public getSexo = (): string => {
        return this.sexo;
    }

    public setSexo = (sexo: string) => {
        if (sexo == "H" || sexo == "M") {
            this.sexo = sexo;
        }
    }
}