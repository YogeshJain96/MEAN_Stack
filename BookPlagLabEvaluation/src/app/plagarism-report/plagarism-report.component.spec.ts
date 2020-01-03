import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagarismReportComponent } from './plagarism-report.component';

describe('PlagarismReportComponent', () => {
  let component: PlagarismReportComponent;
  let fixture: ComponentFixture<PlagarismReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlagarismReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagarismReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
