import { Injectable } from '@angular/core';
import Certificate from '../../models/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  certificates: Certificate[];

  constructor() { 
    this.certificates = [
      {
        id: 1,
        text: "Certificado en Desarrollo Web",
        description: "Certificado que valida mis habilidades en desarrollo web.",
        img: ["../../../assets/projects/portafolio/movil.png", "../../../assets/projects/portafolio/ordenador.png"]
      },
      {
        id: 2,
        text: "Certificado en Angular",
        description: "Certificado que valida mis habilidades en Angular.",
        img: ["../../../assets/projects/portafolio/movil.png", "../../../assets/projects/portafolio/ordenador.png"]
      }
    ];
  }
}
