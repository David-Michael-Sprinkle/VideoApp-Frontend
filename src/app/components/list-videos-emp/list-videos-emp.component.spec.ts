import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideosEmpComponent } from './list-videos-emp.component';

describe('ListVideosEmpComponent', () => {
  let component: ListVideosEmpComponent;
  let fixture: ComponentFixture<ListVideosEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVideosEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVideosEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
