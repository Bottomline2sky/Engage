import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CselectionComponent } from './cselection.component';

describe('CselectionComponent', () => {
  let component: CselectionComponent;
  let fixture: ComponentFixture<CselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
