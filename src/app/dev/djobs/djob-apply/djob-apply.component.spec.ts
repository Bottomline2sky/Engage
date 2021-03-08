import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjobApplyComponent } from './djob-apply.component';

describe('DjobApplyComponent', () => {
  let component: DjobApplyComponent;
  let fixture: ComponentFixture<DjobApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjobApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
