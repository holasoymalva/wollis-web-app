import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search-residences',
  templateUrl: './search-residences.component.html',
  styleUrl: './search-residences.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class SearchResidencesComponent {
  loading = false;
  residences: any[] = [];

  onSearch(event: any): void {
    if (!event.target.value.trim()) {
      this.residences = [];
      return;
    }
    this.loading = true;
    of(this.getMockResidences())
      .pipe(delay(5000)) 
      .subscribe(residences => {
        this.residences = residences;
        this.loading = false;
      });
  }

  private getMockResidences(): any[] {
    const allResidences = [
      { title: 'Residencia en Lomas', description: 'Hermosa casa en zona exclusiva', price: 'USD 1,000,000' },
      { title: 'Casa de campo', description: 'Espacio ideal para descanso', price: 'USD 750,000' },
      { title: 'Apartamento moderno', description: 'Con vista al mar', price: 'USD 600,000' },
      { title: 'Chalet en la montaña', description: 'Cerca de las pistas de esquí', price: 'USD 500,000' },
      { title: 'Mansión suburbana', description: 'Amplios jardines y piscina', price: 'USD 2,200,000' },
      { title: 'Casa rodante', description: 'Perfecta para viajeros', price: 'USD 50,000' },
      { title: 'Loft industrial', description: 'En el corazón del distrito artístico', price: 'USD 850,000' },
      { title: 'Cabaña rústica', description: 'Escapada romántica ideal', price: 'USD 300,000' },
      { title: 'Villa en la playa', description: 'Despierta con el sonido de las olas', price: 'USD 1,500,000' },
      { title: 'Piso en el centro', description: 'Vive en el bullicio de la ciudad', price: 'USD 400,000' },
      { title: 'Bungalow tropical', description: 'Tu retiro privado en el paraíso', price: 'USD 320,000' },
      { title: 'Casa adosada', description: 'Comunidad cerrada con seguridad', price: 'USD 480,000' }
    ];
    return allResidences.filter(() => Math.random() > 0.5);
  }
}