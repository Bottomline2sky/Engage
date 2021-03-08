import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjobsComponent } from './djobs.component';

describe('DjobsComponent', () => {
  let component: DjobsComponent;
  let fixture: ComponentFixture<DjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
