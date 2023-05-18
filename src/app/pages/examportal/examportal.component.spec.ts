import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamportalComponent } from './examportal.component';

describe('ExamportalComponent', () => {
  let component: ExamportalComponent;
  let fixture: ComponentFixture<ExamportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamportalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
