import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsParentComponent } from './rxjs-parent.component';

describe('RxjsParentComponent', () => {
  let component: RxjsParentComponent;
  let fixture: ComponentFixture<RxjsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
