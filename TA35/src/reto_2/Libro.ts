export class Libro {
    isbn: string = "";
    titulo: string = "";
    autor: string = "";
    paginas: number = 0;

    constructor(isbn: string, titulo: string, autor: string, paginas: number){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    public getIsbn = (): string => {
        return this.isbn;
    }

    public setIsbn = (isbn: string): void => {
        this.isbn = isbn;
    }

    public getTitulo = (): string => {
        return this.titulo;
    }

    public setTitulo = (titulo: string): void => {
        this.titulo = titulo;
    }

    public getAutor = (): string => {
        return this.titulo;
    }

    public setAutor = (autor: string): void => {
        this.autor = autor;
    }

    public getPaginas = (): number => {
        return this.paginas;
    }

    public setPaginas = (paginas: number): void => {
        this.paginas = paginas;
    }

    public toString= (): string => {
        return "El libro "+this.titulo+" con ISBN " + this.isbn + " escrito por " + this.autor + " tiene " + this.paginas + " paginas.";
    }
}