import { Injectable } from '@angular/core';
import Collaboration from '../../models/Collaboration';

@Injectable({
  providedIn: 'root'
})
export class CollaborationsService {
  collaborations: Collaboration[];

  constructor() { 
    this.collaborations = [
      {
        id: 1,
        text: "Padel Pro Uruguay",
        url: "https://github.com/padel-pro-uruguay",
      },
      {
        id: 2,
        text: "Panaweb",
        url: "https://github.com/Panaweb",
      },
      {
        id: 3,
        text: "caf7-dev",
        url: "https://github.com/caf7-dev",
      },
      {
        id: 4,
        text: "Zephyr Cloud IO",
        url: "https://github.com/ZephyrCloudIO",
      },
      {
        id: 5,
        text: "Non profits asociaciones",
        url: "https://github.com/Non-profits-asociaciones",
      },
      
    ];
  }
}
