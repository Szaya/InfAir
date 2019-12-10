import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTileComponent } from './homepage-tile.component';

describe('HomepageTileComponent', () => {
  let component: HomepageTileComponent;
  let fixture: ComponentFixture<HomepageTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
