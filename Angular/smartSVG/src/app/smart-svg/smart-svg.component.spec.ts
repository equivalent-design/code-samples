import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSVGComponent } from './smart-svg.component';

describe('SmartSVGComponent', () => {
  let component: SmartSVGComponent;
  let fixture: ComponentFixture<SmartSVGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartSVGComponent]
    });
    fixture = TestBed.createComponent(SmartSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
