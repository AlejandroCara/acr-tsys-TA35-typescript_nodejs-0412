import { Persona } from "./Persona";

export class Profesor extends Persona {
    private asignatura: string = "";

    constructor(nombre: string, edad: number, sexo: string, asignatura: string){
        super(nombre, edad, sexo);
        this.setAsignatura(asignatura);
    }

    public getAsignatura = (): string => {
        return this.asignatura;
    }

    public setAsignatura = (asignatura: string): void => {
        if (asignatura.toLocaleLowerCase() == "matemáticas" || asignatura.toLocaleLowerCase() == "filosofía" || asignatura.toLocaleLowerCase() == "física") {
            this.asignatura = asignatura;
        }
    }

    public isDisponible = (): boolean => {
        let result = true;
        
        if (Math.floor(Math.random() * (100 - 0 + 1) + 0) < 20) {
            result = false;
        }

        return result;
    }
}