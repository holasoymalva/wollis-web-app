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
    return [
      { title: 'Residencia en Lomas', description: 'Hermosa casa en zona exclusiva', price: 'USD 1,000,000' },
      { title: 'Casa de campo', description: 'Espacio ideal para descanso', price: 'USD 750,000' }
    ];
  }
}