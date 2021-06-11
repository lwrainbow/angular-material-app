import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraChartComponent } from './extra-chart.component';

describe('ExtraChartComponent', () => {
  let component: ExtraChartComponent;
  let fixture: ComponentFixture<ExtraChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
