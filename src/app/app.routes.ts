import { Routes } from '@angular/router';
import { SearchResidencesComponent } from './search-residences/search-residences.component';
import { FraudDetectionComponentComponent } from './fraud-detection-component/fraud-detection-component.component';
import { RecommendationsComponentComponent } from './recommendations-component/recommendations-component.component';

export const routes: Routes = [
    { path: 'search-residences', component: SearchResidencesComponent },
    { path: 'fraud-detection', component: FraudDetectionComponentComponent },
    { path: 'recommendations', component: RecommendationsComponentComponent },
    { path: '', redirectTo: '/search-residences', pathMatch: 'full' },  // Redirección por defecto
    { path: '**', redirectTo: '/search-residences' }  // Wildcard Route para una 404 - Redirecciona a search-residences
];
  
