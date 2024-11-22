/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsercoachComponent } from './usercoach.component';

describe('UsercoachComponent', () => {
  let component: UsercoachComponent;
  let fixture: ComponentFixture<UsercoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
