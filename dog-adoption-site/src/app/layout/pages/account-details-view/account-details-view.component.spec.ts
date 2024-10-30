import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsViewComponent } from './account-details-view.component';

describe('AccountDetailsViewComponent', () => {
  let component: AccountDetailsViewComponent;
  let fixture: ComponentFixture<AccountDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
