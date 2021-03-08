import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnotificationComponent } from './dnotification.component';

describe('DnotificationComponent', () => {
  let component: DnotificationComponent;
  let fixture: ComponentFixture<DnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
