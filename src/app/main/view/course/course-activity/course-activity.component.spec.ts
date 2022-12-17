import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActivityComponent } from './course-activity.component';

describe('CourseActivityComponent', () => {
  let component: CourseActivityComponent;
  let fixture: ComponentFixture<CourseActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
