import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOSTComponent } from './dost.component';

describe('DOSTComponent', () => {
  let component: DOSTComponent;
  let fixture: ComponentFixture<DOSTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DOSTComponent]
    });
    fixture = TestBed.createComponent(DOSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
