import { IEntregable } from "./IEntregable";

export class Serie implements IEntregable{
    titulo: string = "";
    temporadas: number = 3;
    entregado: boolean = false;
    genero: string = "";
    creador: string = "";

    constructor(titulo: string, creador: string){
        this.titulo = titulo;
        this.creador = creador;
    }

    public getTitulo = (): string => {
        return this.titulo;
    }

    public setTitulo = (titulo: string): void => {
        this.titulo = titulo;
    }

    public getTemporadas = (): number => {
        return this.temporadas;
    }

    public setTemporadas = (temporadas: number): void => {
        this.temporadas = temporadas;
    }

    public getGenero = (): string => {
        return this.genero;
    }

    public setGenero = (genero: string): void => {
        this.genero = genero;
    }
    
    public getCreador = (): string => {
        return this.creador;
    }

    public setCreador = (creador: string): void => {
        this.creador = creador;
    }

    public toString = (): string => {
        return this.titulo + " | " + this.temporadas + " | " + this.creador + " | " + this.genero;
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
            if ((a as Serie).getTemporadas() > this.getTemporadas()){
                resultCode = 1;
            } else if ((a as Serie).getTemporadas() > this.getTemporadas()){
                resultCode = -1
            }
        } else {
            resultCode = 500;
        }

        return resultCode;
    }
}