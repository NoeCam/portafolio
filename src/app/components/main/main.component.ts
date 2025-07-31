import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { CollaborationsComponent } from '../collaborations/collaborations.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { TitleComponent } from '../title/title.component';
import { EducationComponent } from '../education/education.component';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-main',
  imports: [
    TitleComponent, 
    ProjectsComponent, 
    CollaborationsComponent, 
    AboutComponent, 
    ContactComponent, 
    EducationComponent, 
    CertificatesComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
