import { Serie } from "./reto_1/Serie";
import { Videojuego } from "./reto_1/Videojuego";
import { Libro } from "./reto_2/Libro";
import { Raices } from "./reto_3/Raices";
import { Alumno } from "./reto_4/Alumno";
import { Aula } from "./reto_4/Aula";
import { Profesor } from "./reto_4/Profesor";


let videojuegos: Videojuego[] = [];
let series: Serie[] = [];
let vj: Videojuego;
let sr: Serie;
let entregados: number = 0;

vj = new Videojuego("World of Warcraft", "Blizzard");
vj.setGenero("MMORPG");
vj.setDuracion(500);
videojuegos.push(vj);

vj = new Videojuego("Elden Ring", "Fromsoftware");
vj.setGenero("Action RPG");
vj.setDuracion(200);
videojuegos.push(vj);

vj = new Videojuego("Monster Hunter World", "Capcom");
vj.setGenero("Action RPG");
vj.entregar();
vj.setDuracion(300);
videojuegos.push(vj);

vj = new Videojuego("Terraria", "Re-Logic");
vj.setGenero("Sandbox Aventura");
vj.setDuracion(90);
vj.entregar();
videojuegos.push(vj);

vj = new Videojuego("Dark Souls", "Fromsoftware");
vj.setGenero("Action RPG");
vj.setDuracion(60);
vj.entregar();
videojuegos.push(vj);



sr = new Serie("One Pice", "Eiichiro Oda");
sr.setGenero("Aventura Fantasia");
sr.setTemporadas(34);
series.push(sr);

sr = new Serie("Shigeki no Kyojin", "Hajime Isayama");
sr.setGenero("Fantasia");
sr.setTemporadas(8);
sr.entregar();
series.push(sr);

sr = new Serie("DragonBall", "Akira Toriyama");
sr.setGenero("Fantasia");
sr.setTemporadas(21);
series.push(sr);


vj = videojuegos[0];

for(let i = 0; i < videojuegos.length; i++){
  if(videojuegos[i].isEntregado()) {
    entregados++;
  }

  if(vj.compareTo(videojuegos[i]) == 1){
    vj = videojuegos[i];
  } 
}

console.log(videojuegos);
console.log(series);

console.log("Videojuegos entregados: " + entregados);
console.log("El videojuego con mas horas de juego es: " + vj);



let libro1: Libro = new Libro("FUJ4398J", "El señor de los anillos: la comunidad del anillo", "J.R.R Tolkien", 400);
let libro2: Libro = new Libro("DAS5423H", "World of Warcraft Cronicas Vol.1", "Chris Metzen", 200);

if (libro1.getPaginas() > libro2.getPaginas()) {
  console.log(libro1.toString());
} else {
  console.log(libro1.toString());
}


let raiz: Raices = new Raices(-1, 7, -10);

raiz.calcular();


let aula: Aula = new Aula(2, 10, "matemáticas");
let profesor: Profesor = new Profesor("Alfonso", 35, "H", "matemáticas");
aula.setProfesor(profesor);
aula.addAlumno(new Alumno("Alejandro", 15, "H", 7));
aula.addAlumno(new Alumno("María", 16, "M", 9));
aula.addAlumno(new Alumno("Mariano", 14, "H", 6));
aula.addAlumno(new Alumno("Carmen", 14, "M", 6));
aula.addAlumno(new Alumno("Blanca", 15, "M", 3));

if (aula.isPosibleDarClase()) {
  console.log("Se puede dar clase");
} else {
  console.log("No se puede dar clase");
}