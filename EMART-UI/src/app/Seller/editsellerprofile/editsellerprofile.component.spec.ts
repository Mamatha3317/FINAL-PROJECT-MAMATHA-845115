import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsellerprofileComponent } from './editsellerprofile.component';

describe('EditsellerprofileComponent', () => {
  let component: EditsellerprofileComponent;
  let fixture: ComponentFixture<EditsellerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsellerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsellerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
