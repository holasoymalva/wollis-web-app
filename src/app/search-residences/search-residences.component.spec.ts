import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResidencesComponent } from './search-residences.component';

describe('SearchResidencesComponent', () => {
  let component: SearchResidencesComponent;
  let fixture: ComponentFixture<SearchResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResidencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
