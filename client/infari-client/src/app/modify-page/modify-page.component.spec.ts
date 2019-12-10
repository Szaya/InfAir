import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPageComponent } from './modify-page.component';

describe('ModifyPageComponent', () => {
  let component: ModifyPageComponent;
  let fixture: ComponentFixture<ModifyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
