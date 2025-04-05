import { Injectable } from '@angular/core';
import Project from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[];

  constructor() { 
    this.projects = [
      {
        id: 1,
        text: "Portafolio",
        url: "https://portafolio-hab.netlify.app/",
        description: `Proyecto propio. Aplicación web que muestra información sobre mi perfil
        profesional, proyectos realizados y datos de contacto.`,
        technologist: ["Angular", "TypeScript", "HTML", "CSS"],
      },
      {
        id: 2,
        text: "Bella Vita Centro estético",
        url: "https://bellavitacentroestetico.vercel.app/",
        description: `Proyecto propio. Aplicación para la gestión de tratamientos cosmetológicos, 
        que permite listar los servicios disponibles y reservar citas con una cosmetóloga 
        específica, seleccionando el día y la hora de preferencia.`,
        technologist: ["Next", "Node", "Express", "MySQL"],
      },
      {
        id: 3,
        text: "Experiencias diferentes",
        url: "https://experiencias-diferentes.netlify.app/",
        description: `Proyecto realizado en grupo. 
        Es una aplicación en la que hay roles de administrador y de usuario, en la que 
        los administradores pueden agregar destinos a disfrutar y donde el usuario puede 
        reservar tantas experiencias de disfrute como quiera.`,
        technologist: ["React", "Node", "Express", "MySQL", "Metodología AGILE"],
      },
      {
        id: 4,
        text: "Parejas de Emojis",
        url: "https://parejas-emojis-hab.netlify.app/",
        description: `Proyecto realizado en grupo. Creación de un juego de cartas online 
        similar al juego de cartas "memorama".`,
        technologist: ["HTML", "CSS", "JavaScript"],
      },
    ];
  }
}
