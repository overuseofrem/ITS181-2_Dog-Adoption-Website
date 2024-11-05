import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogProfileViewComponent } from './admin-dog-profile-view.component';

describe('AdminDogProfileViewComponent', () => {
  let component: AdminDogProfileViewComponent;
  let fixture: ComponentFixture<AdminDogProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDogProfileViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDogProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
