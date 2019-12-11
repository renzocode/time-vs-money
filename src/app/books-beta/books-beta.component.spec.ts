import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBetaComponent } from './books-beta.component';

describe('BooksBetaComponent', () => {
  let component: BooksBetaComponent;
  let fixture: ComponentFixture<BooksBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
