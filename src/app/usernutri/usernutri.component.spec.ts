/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsernutriComponent } from './usernutri.component';

describe('UsernutriComponent', () => {
  let component: UsernutriComponent;
  let fixture: ComponentFixture<UsernutriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernutriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
