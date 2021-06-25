import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastresultComponent } from './pastresult.component';

describe('PastresultComponent', () => {
  let component: PastresultComponent;
  let fixture: ComponentFixture<PastresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
