import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdetailsComponent } from './jdetails.component';

describe('JdetailsComponent', () => {
  let component: JdetailsComponent;
  let fixture: ComponentFixture<JdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
