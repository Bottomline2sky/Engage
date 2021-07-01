import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgeneralComponent } from './cgeneral.component';

describe('CgeneralComponent', () => {
  let component: CgeneralComponent;
  let fixture: ComponentFixture<CgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
