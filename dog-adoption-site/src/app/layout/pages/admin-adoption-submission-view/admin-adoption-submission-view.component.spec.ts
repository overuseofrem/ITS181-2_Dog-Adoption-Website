import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionSubmissionViewComponent } from './admin-adoption-submission-view.component';

describe('AdminAdoptionSubmissionViewComponent', () => {
  let component: AdminAdoptionSubmissionViewComponent;
  let fixture: ComponentFixture<AdminAdoptionSubmissionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdoptionSubmissionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAdoptionSubmissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
