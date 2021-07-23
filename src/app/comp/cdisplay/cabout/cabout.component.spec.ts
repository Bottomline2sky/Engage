import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboutComponent } from './cabout.component';

describe('CaboutComponent', () => {
  let component: CaboutComponent;
  let fixture: ComponentFixture<CaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
