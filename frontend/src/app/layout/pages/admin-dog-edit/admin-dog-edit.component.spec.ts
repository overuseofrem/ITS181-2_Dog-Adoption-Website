import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogEditComponent } from './admin-dog-edit.component';

describe('AdminDogEditComponent', () => {
  let component: AdminDogEditComponent;
  let fixture: ComponentFixture<AdminDogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDogEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
