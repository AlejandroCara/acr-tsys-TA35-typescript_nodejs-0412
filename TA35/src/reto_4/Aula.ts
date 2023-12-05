import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Aula {
    private id: number = 0;
    private maxEstudiantes: number = 0;
    private asignatura: string = "";
    private profesor: Profesor | undefined ;
    private alumnos: Alumno[] = [];

    constructor(id: number, maxEstudiantes: number, asignatura: string) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.setAsignatura(asignatura);
    }

    public getId = (): number => {
        return this.id;
    }

    public getMaxEstudiantes = (): number => {
        return this.maxEstudiantes;
    }

    public getAsignatura = (): string => {
        return this.asignatura;
    }

    public setAsignatura = (asignatura: string): void => {
        if (asignatura.toLocaleLowerCase() == "matemáticas" || asignatura.toLocaleLowerCase() == "filosofía" || asignatura.toLocaleLowerCase() == "física") {
            this.asignatura = asignatura;
        }
    }

    public isPosibleDarClase = (): boolean => {
        let result = false;

        if(this.alumnos.length >= Math.floor((this.maxEstudiantes * 0.5)) && this.profesor !== undefined && this.profesor.isDisponible()){
            result = true;
        }

        return result;
    }

    public addAlumno = (alumno: Alumno): void => {
        this.alumnos.push(alumno);
    }

    public setProfesor = (profesor: Profesor): void => {
        if(profesor.getAsignatura() == "matemáticas" || profesor.getAsignatura() == "filosofía" || profesor.getAsignatura() == "física"){
            this.profesor = profesor;
        }
    }

    public getAlumnos = (): void => {
        let alumnos: Alumno[] = [];
        let alumnas: Alumno[] = [];

        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].getSexo() == "H") {
                alumnos.push(this.alumnos[i]);
            } else {
                alumnas.push(this.alumnos[i]);
            }
        }

        console.log("Alumnos: ");
        for (let i = 0; i < alumnos.length; i++) {
            console.log(alumnos[i]);
        }

        console.log("Alumnas: ");
        for (let i = 0; i < alumnas.length; i++) {
            console.log(alumnas[i]);
        }
    }
}