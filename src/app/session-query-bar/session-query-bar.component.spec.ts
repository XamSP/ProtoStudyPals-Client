import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionQueryBarComponent } from './session-query-bar.component';

describe('SessionQueryBarComponent', () => {
  let component: SessionQueryBarComponent;
  let fixture: ComponentFixture<SessionQueryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionQueryBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionQueryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
