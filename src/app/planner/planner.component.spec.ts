import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerComponent } from './planner.component';
import { TableComponent } from '../table/table.component';

describe('PlannerComponent', () => {
  let component: PlannerComponent;
  let fixture: ComponentFixture<PlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlannerComponent, TableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
