import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessageFormComponent } from './contact-message-form.component';

describe('ContactMessageFormComponent', () => {
  let component: ContactMessageFormComponent;
  let fixture: ComponentFixture<ContactMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMessageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
