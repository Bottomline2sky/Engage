import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpostComponent } from './cpost.component';

describe('CpostComponent', () => {
  let component: CpostComponent;
  let fixture: ComponentFixture<CpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
