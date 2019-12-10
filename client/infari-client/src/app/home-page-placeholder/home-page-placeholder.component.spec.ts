import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePlaceholderComponent } from './home-page-placeholder.component';

describe('HomePagePlaceholderComponent', () => {
  let component: HomePagePlaceholderComponent;
  let fixture: ComponentFixture<HomePagePlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
