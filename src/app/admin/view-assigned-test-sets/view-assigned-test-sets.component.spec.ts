import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedTestSetsComponent } from './view-assigned-test-sets.component';

describe('ViewAssignedTestSetsComponent', () => {
  let component: ViewAssignedTestSetsComponent;
  let fixture: ComponentFixture<ViewAssignedTestSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignedTestSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignedTestSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
