import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsectionComponent } from './dsection.component';

describe('DsectionComponent', () => {
  let component: DsectionComponent;
  let fixture: ComponentFixture<DsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
