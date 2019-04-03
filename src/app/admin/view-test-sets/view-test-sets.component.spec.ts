import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestSetsComponent } from './view-test-sets.component';

describe('ViewTestSetsComponent', () => {
  let component: ViewTestSetsComponent;
  let fixture: ComponentFixture<ViewTestSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
