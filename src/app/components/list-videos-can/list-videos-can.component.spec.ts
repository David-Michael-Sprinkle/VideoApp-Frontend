import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideosCanComponent } from './list-videos-can.component';

describe('ListVideosCanComponent', () => {
  let component: ListVideosCanComponent;
  let fixture: ComponentFixture<ListVideosCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVideosCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVideosCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
