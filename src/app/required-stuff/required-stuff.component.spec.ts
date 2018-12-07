import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredStuffComponent } from './required-stuff.component';

describe('RequiredStuffComponent', () => {
  let component: RequiredStuffComponent;
  let fixture: ComponentFixture<RequiredStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
