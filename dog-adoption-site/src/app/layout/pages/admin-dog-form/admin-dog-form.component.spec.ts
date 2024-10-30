import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogFormComponent } from './admin-dog-form.component';

describe('AdminDogFormComponent', () => {
  let component: AdminDogFormComponent;
  let fixture: ComponentFixture<AdminDogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
