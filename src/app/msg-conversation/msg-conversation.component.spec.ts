import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgConversationComponent } from './msg-conversation.component';

describe('MsgConversationComponent', () => {
  let component: MsgConversationComponent;
  let fixture: ComponentFixture<MsgConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
