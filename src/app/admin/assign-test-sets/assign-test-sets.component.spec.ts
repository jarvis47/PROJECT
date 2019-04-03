import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTestSetsComponent } from './assign-test-sets.component';

describe('AssignTestSetsComponent', () => {
  let component: AssignTestSetsComponent;
  let fixture: ComponentFixture<AssignTestSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTestSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTestSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
