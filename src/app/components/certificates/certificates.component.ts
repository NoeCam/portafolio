import { Component } from '@angular/core';
import { CertificatesService } from '../../services/certificates.service';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  constructor(public certificatesService: CertificatesService) {}
}
