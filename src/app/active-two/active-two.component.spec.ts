import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTwoComponent } from './active-two.component';

describe('ActiveTwoComponent', () => {
  let component: ActiveTwoComponent;
  let fixture: ComponentFixture<ActiveTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
