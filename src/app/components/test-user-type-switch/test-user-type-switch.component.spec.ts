import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserTypeSwitchComponent } from './test-user-type-switch.component';

describe('TestUserTypeSwitchComponent', () => {
  let component: TestUserTypeSwitchComponent;
  let fixture: ComponentFixture<TestUserTypeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserTypeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserTypeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
