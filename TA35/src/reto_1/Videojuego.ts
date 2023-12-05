import { IEntregable } from "./IEntregable";

export class Videojuego implements IEntregable{
    titulo: string = "";
    duracion: number = 10;
    entregado: boolean = false;
    genero: string = "";
    compania: string = "";

    constructor(titulo: string, compania: string){
        this.titulo = titulo;
        this.compania = compania;
    }

    public getTitulo = (): string => {
        return this.titulo;
    }

    public setTitulo = (titulo: string): void => {
        this.titulo = titulo;
    }

    public getDuracion = (): number => {
        return this.duracion;
    }

    public setDuracion = (duracion: number): void => {
        this.duracion = duracion;
    }

    public getGenero = (): string => {
        return this.genero;
    }

    public setGenero = (genero: string): void => {
        this.genero = genero;
    }

    public getCompania = (): string => {
        return this.compania;
    }

    public setCompania = (compania: string): void => {
        this.compania = compania;
    }
    
    public toString = (): string => {
        return this.titulo + " | " + this.duracion + " | " + this.compania + " | " + this.genero;
    }

    public entregar = (): void => {
        this.entregado = true;
    }

    public devolver = (): void => {
        this.entregado = false;
    }

    public isEntregado = (): boolean => {
        return this.entregado;
    }

    public compareTo = (a: object): number => {
        let resultCode = 0;

        if (a.constructor.name == "Videojuego") {
            if ((a as Videojuego).getDuracion() > this.getDuracion()){
                resultCode = 1;
            } else if ((a as Videojuego).getDuracion() < this.getDuracion()){
                resultCode = -1
            }
        } else {
            resultCode = 500;
        }

        return resultCode;
    }


}