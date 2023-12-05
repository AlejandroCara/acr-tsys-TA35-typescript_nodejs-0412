export interface IEntregable {
    entregar: ()=> void;
    devolver: ()=> void;
    isEntregado: ()=> boolean;
    compareTo: (a: object)=> number;
}