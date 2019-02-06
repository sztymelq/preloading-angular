import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxSelectComponent } from './pax-select.component';

describe('PaxSelectComponent', () => {
  let component: PaxSelectComponent;
  let fixture: ComponentFixture<PaxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
