import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionBoardComponent } from './session-board.component';

describe('SessionBoardComponent', () => {
  let component: SessionBoardComponent;
  let fixture: ComponentFixture<SessionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
