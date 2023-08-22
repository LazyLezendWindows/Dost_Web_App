import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeboptionsComponent } from './weboptions.component';

describe('WeboptionsComponent', () => {
  let component: WeboptionsComponent;
  let fixture: ComponentFixture<WeboptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeboptionsComponent]
    });
    fixture = TestBed.createComponent(WeboptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
