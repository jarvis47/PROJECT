import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTestSetsComponent } from './upload-test-sets.component';

describe('UploadTestSetsComponent', () => {
  let component: UploadTestSetsComponent;
  let fixture: ComponentFixture<UploadTestSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTestSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTestSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
