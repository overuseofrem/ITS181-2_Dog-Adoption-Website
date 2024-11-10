import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionViewComponent } from './admin-adoption-view.component';

describe('AdminAdoptionViewComponent', () => {
  let component: AdminAdoptionViewComponent;
  let fixture: ComponentFixture<AdminAdoptionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdoptionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAdoptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
