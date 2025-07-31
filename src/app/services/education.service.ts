import { Injectable } from '@angular/core';
import Education from '../../models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educations: Education[];

  constructor() { 
    this.educations = [
      {
        id: 1,
        text: "Bootcamp de Programación de Páginas Web Full Stack",
        url: "https://www.hackaboss.com/",
        img: ["../../../assets/projects/portafolio/movil.png", "../../../assets/projects/portafolio/ordenador.png"],
        description: `Realicé un bootcamp intensivo de 19 semanas en Desarrollo Web Full-Stack en Hack a Boss, adquiriendo 
        experiencia práctica en tecnologías clave como HTML, CSS, JavaScript, SQL, Node.js, Express.js y React.js. Durante 
        el programa desarrollé proyectos integrales aplicando metodologías y herramientas de trabajo colaborativo como 
        GitLab, GitHub y Slack, simulando entornos reales de desarrollo profesional.`,
        date: "2024-01-19 a 2024-08-08",
        address: "HACK A BOSS, A Coruña, España"
      },
      {
        id: 2,
        text: "Licenciatura en Química",
        url: "https://www.fq.edu.uy/?q=es/node/17",
        img: ["../../../assets/projects/portafolio/movil.png", "../../../assets/projects/portafolio/ordenador.png"],
        description: `Licenciatura en Química por la Universidad de la República, donde adquirí conocimientos fundamentales 
        en química orgánica, inorgánica, analítica y física. Durante mi formación, desarrollé habilidades en investigación 
        y análisis químico, así como en la aplicación de técnicas experimentales avanzadas.`,
        date: "2007 a 2019",
        address: "HACK A BOSS, A Coruña, España"
      },
    ];
  }
}
