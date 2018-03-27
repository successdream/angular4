import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourContentComponent } from './your-content.component';

describe('YourContentComponent', () => {
  let component: YourContentComponent;
  let fixture: ComponentFixture<YourContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
