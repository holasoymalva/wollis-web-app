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
      .pipe(delay(500))
      .subscribe(residences => {
        this.residences = this.shuffleArray(residences);
        this.loading = false;
      });
  }

  private getMockResidences(): any[] {
    const allResidences = [
      { title: 'Residence in Lomas', description: 'Beautiful house in an exclusive area', price: 'USD 1,000,000', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Country House', description: 'Ideal space for rest', price: 'USD 750,000', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Modern Apartment', description: 'With sea view', price: 'USD 600,000', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Mountain Chalet', description: 'Close to the ski slopes', price: 'USD 500,000', image: 'https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Suburban Mansion', description: 'Large gardens and pool', price: 'USD 2,200,000', image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Travel Trailer', description: 'Perfect for travelers', price: 'USD 50,000', image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Industrial Loft', description: 'In the heart of the arts district', price: 'USD 850,000', image: 'https://images.unsplash.com/photo-1560184897-0e5d96d86acd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Rustic Cabin', description: 'Ideal romantic getaway', price: 'USD 300,000', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Beach Villa', description: 'Wake up to the sound of the waves', price: 'USD 1,500,000', image: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Downtown Flat', description: 'Live in the hustle and bustle of the city', price: 'USD 400,000', image: 'https://images.unsplash.com/photo-1560184897-ad57012c0981?q=80&w=2949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Tropical Bungalow', description: 'Your private retreat in paradise', price: 'USD 320,000', image: 'https://plus.unsplash.com/premium_photo-1673014201324-2eccc35d8387?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { title: 'Townhouse', description: 'Gated community with security', price: 'USD 480,000', image: 'https://images.unsplash.com/photo-1550930401-6a5854f1c5dd?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];
    return allResidences;
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
}