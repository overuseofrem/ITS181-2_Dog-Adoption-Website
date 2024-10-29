import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptableDogsComponent } from './adoptable-dogs.component';

describe('AdoptableDogsComponent', () => {
  let component: AdoptableDogsComponent;
  let fixture: ComponentFixture<AdoptableDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptableDogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptableDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
