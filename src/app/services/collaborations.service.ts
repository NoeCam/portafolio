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
        text: "Zephyr Cloud IO",
        url: "https://github.com/ZephyrCloudIO",
      },
      {
        id: 2,
        text: "Non profits asociaciones",
        url: "https://github.com/Non-profits-asociaciones",
      },
    ];
  }
}
