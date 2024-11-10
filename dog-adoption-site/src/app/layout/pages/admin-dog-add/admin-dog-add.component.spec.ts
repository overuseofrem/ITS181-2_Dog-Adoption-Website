import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogAddComponent } from './admin-dog-add.component';

describe('AdminDogAddComponent', () => {
  let component: AdminDogAddComponent;
  let fixture: ComponentFixture<AdminDogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDogAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
