import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOneComponent } from './active-one.component';

describe('ActiveOneComponent', () => {
  let component: ActiveOneComponent;
  let fixture: ComponentFixture<ActiveOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
