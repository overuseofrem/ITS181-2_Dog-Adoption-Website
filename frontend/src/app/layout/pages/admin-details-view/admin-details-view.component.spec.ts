import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsViewComponent } from './admin-details-view.component';

describe('AdminDetailsViewComponent', () => {
  let component: AdminDetailsViewComponent;
  let fixture: ComponentFixture<AdminDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
