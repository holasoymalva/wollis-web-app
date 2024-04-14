import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudDetectionComponentComponent } from './fraud-detection-component.component';

describe('FraudDetectionComponentComponent', () => {
  let component: FraudDetectionComponentComponent;
  let fixture: ComponentFixture<FraudDetectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudDetectionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraudDetectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
