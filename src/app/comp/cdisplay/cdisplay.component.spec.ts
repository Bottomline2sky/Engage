import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdisplayComponent } from './cdisplay.component';

describe('CdisplayComponent', () => {
  let component: CdisplayComponent;
  let fixture: ComponentFixture<CdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
