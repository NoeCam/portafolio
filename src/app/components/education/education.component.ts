import { Component } from '@angular/core';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(public educationService: EducationService ) {}
}
