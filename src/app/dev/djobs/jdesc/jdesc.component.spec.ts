import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdescComponent } from './jdesc.component';

describe('JdescComponent', () => {
  let component: JdescComponent;
  let fixture: ComponentFixture<JdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
