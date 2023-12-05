import { Persona } from "./Persona";

export class Alumno extends Persona {
    private calificacion: number = 0;

    constructor(nombre: string, edad: number, sexo: string, calificacion: number){
        super(nombre, edad, sexo);
        this.setCalificacion(calificacion);
    }

    public getCalificacion = (): number => {
        return this.calificacion;
    }

    public setCalificacion = (calificacion: number): void => {
        if (calificacion >= 0 && calificacion <= 10) {
            this.calificacion = calificacion;
        }
    }

    public isDisponible = (): boolean => {
        let result = true;
        
        if (Math.floor(Math.random() * (100 - 0 + 1) + 0) > 49) {
            result = false;
        }

        return result;
    }
}