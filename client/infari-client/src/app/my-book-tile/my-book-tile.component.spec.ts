import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookTileComponent } from './my-book-tile.component';

describe('MyBookTileComponent', () => {
  let component: MyBookTileComponent;
  let fixture: ComponentFixture<MyBookTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
