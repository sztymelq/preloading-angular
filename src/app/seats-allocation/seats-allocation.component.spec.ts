import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsAllocationComponent } from './seats-allocation.component';

describe('SeatsAllocationComponent', () => {
  let component: SeatsAllocationComponent;
  let fixture: ComponentFixture<SeatsAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
