import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountViewApplicationsComponent } from './account-view-applications.component';

describe('AccountViewApplicationsComponent', () => {
  let component: AccountViewApplicationsComponent;
  let fixture: ComponentFixture<AccountViewApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountViewApplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
