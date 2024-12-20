import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAdminComponent } from './sign-in-admin.component';

describe('SignInAdminComponent', () => {
  let component: SignInAdminComponent;
  let fixture: ComponentFixture<SignInAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
