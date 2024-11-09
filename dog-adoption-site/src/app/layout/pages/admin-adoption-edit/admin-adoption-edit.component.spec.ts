import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionEditComponent } from './admin-adoption-edit.component';

describe('AdminAdoptionEditComponent', () => {
  let component: AdminAdoptionEditComponent;
  let fixture: ComponentFixture<AdminAdoptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdoptionEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAdoptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
