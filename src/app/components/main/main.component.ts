import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { CollaborationsComponent } from '../collaborations/collaborations.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-main',
  imports: [TitleComponent, ProjectsComponent, CollaborationsComponent, AboutComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
