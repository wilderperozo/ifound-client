import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearcherComponent } from './post-searcher.component';

describe('PostSearcherComponent', () => {
  let component: PostSearcherComponent;
  let fixture: ComponentFixture<PostSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
