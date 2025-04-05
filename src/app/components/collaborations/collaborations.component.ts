import { Component } from '@angular/core';
import { CollaborationsService } from '../../services/collaborations.service';

@Component({
  selector: 'app-collaborations',
  imports: [],
  templateUrl: './collaborations.component.html',
  styleUrl: './collaborations.component.css'
})
export class CollaborationsComponent {
  constructor(public collaborationsService: CollaborationsService ) {}
}
