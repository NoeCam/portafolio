import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
