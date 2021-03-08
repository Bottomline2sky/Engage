import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CjobsComponent } from './cjobs.component';

describe('CjobsComponent', () => {
  let component: CjobsComponent;
  let fixture: ComponentFixture<CjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
