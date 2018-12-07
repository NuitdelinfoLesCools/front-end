import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTimeComponent } from './break-time.component';

describe('BreakTimeComponent', () => {
  let component: BreakTimeComponent;
  let fixture: ComponentFixture<BreakTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
