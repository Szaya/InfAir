import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeadComponent } from './search-head.component';

describe('SearchHeadComponent', () => {
  let component: SearchHeadComponent;
  let fixture: ComponentFixture<SearchHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
