import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogViewComponent } from './admin-dog-view.component';

describe('AdminDogViewComponent', () => {
  let component: AdminDogViewComponent;
  let fixture: ComponentFixture<AdminDogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDogViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
