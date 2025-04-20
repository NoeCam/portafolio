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
        img: ["../../../assets/projects/portafolio/movil.png", "../../../assets/projects/portafolio/ordenador.png"],
        description: `Proyecto propio. Aplicación web que muestra información sobre mi perfil
        profesional, proyectos realizados y datos de contacto.`,
        technologist: ["angular", "typescript", "html", "css"],
      },
      {
        id: 2,
        text: "Bella Vita Centro estético",
        url: "https://bellavitacentroestetico.vercel.app/",
        img: ["../../../assets/projects/bella-vita/movil.png", "../../../assets/projects/bella-vita/ordenador.png"],
        description: `Proyecto propio. Aplicación para la gestión de tratamientos cosmetológicos, 
        que permite listar los servicios disponibles y reservar citas con una cosmetóloga 
        específica, seleccionando el día y la hora de preferencia.`,
        technologist: ["nextjs", "nodejs", "express", "mysql", "tailwind"],
      },
      {
        id: 3,
        text: "Experiencias diferentes",
        url: "https://experiencias-diferentes.netlify.app/",
        img: ["../../../assets/projects/experiencias-diferentes/movil.png", "../../../assets/projects/experiencias-diferentes/ordenador.png"],
        description: `Proyecto realizado en grupo. 
        Es una aplicación en la que hay roles de administrador y de usuario, en la que 
        los administradores pueden agregar destinos a disfrutar y donde el usuario puede 
        reservar tantas experiencias de disfrute como quiera.`,
        technologist: ["react", "nodejs", "express", "mysql", "tailwind"],
      },
      {
        id: 4,
        text: "Parejas de Emojis",
        url: "https://parejas-emojis-hab.netlify.app/",
        img: ["../../../assets/projects/memorama/movil.png", "../../../assets/projects/memorama/ordenador.png"],
        description: `Proyecto realizado en grupo. Creación de un juego de cartas online 
        similar al juego de cartas "memorama".`,
        technologist: ["html", "css", "javascript"],
      },
    ];
  }
}
