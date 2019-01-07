import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnalysisComponent } from './single-analysis.component';

describe('SingleAnalysisComponent', () => {
  let component: SingleAnalysisComponent;
  let fixture: ComponentFixture<SingleAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
