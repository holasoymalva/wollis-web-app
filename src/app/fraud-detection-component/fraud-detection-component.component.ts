import { Component } from '@angular/core';
import { ClassifyService } from '../classify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fraud-detection-component',
  standalone: true,
  imports: [CommonModule],  // Importa CommonModule aquí
  templateUrl: './fraud-detection-component.component.html',
  styleUrls: ['./fraud-detection-component.component.scss']
})
export class FraudDetectionComponentComponent {
  loading = false;
  response: string = '';

  constructor(private classifyService: ClassifyService) { }

  onAnalystFraud(event: any): void {
    const value = event.target.value.trim();
    if (!value) {
      this.loading = false;
      this.response = '';
      return;
    }
    this.loading = true;
    this.classifyService.classifyText(value).subscribe(
      data => {
        this.loading = false;
        this.response = data.classification;
        // Aquí procesas la respuesta como desees
      },
      error => {
        this.loading = false;
        console.error('Error al clasificar el texto:', error);
        // Manejo de errores
      }
    );
  }
}