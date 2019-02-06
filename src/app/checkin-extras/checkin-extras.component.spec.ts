import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinExtrasComponent } from './checkin-extras.component';

describe('CheckinExtrasComponent', () => {
  let component: CheckinExtrasComponent;
  let fixture: ComponentFixture<CheckinExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
