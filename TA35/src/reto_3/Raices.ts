export class Raices {
    a: number = 0;
    b: number = 0;
    c: number = 0;

    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDiscriminate = (): number => {
        return ((Math.pow(this.b, 2)) - (4 * this.a * this.c));
    }

    public tieneRaices = (): boolean => {
        return this.getDiscriminate() >= 0;
    }

    public tieneRaiz = (): boolean => {
        return this.getDiscriminate() == 0;
    }

    public calcular = (): void => {
        let result = ((-1 * this.b) + Math.sqrt(this.getDiscriminate())) / (2 * this.a);
        let result2 = 0;

        if (this.tieneRaices()) {
            result2 = ((-1 * this.b) - Math.sqrt(this.getDiscriminate())) / (2 * this.a);

            console.log("Resultado 1: " + result);
            console.log("Resultado 2: " + result2);
        } else if (this.tieneRaiz()){
            console.log("Resultado: " + result);
        } else {
            console.log("No tiene soluciones");
        }
    } 

    public obtenerRaices = (): void => {
        console.log("Raiz 1: " + Math.sqrt(this.getDiscriminate()));
        console.log("Raiz 2: " + (-1 * Math.sqrt(this.getDiscriminate())));
    }

    public obtenerRaiz = (): void => {
        console.log("Raiz: " + Math.sqrt(this.getDiscriminate()));
    }
}