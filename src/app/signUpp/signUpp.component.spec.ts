/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignUppComponent } from './signUpp.component';

describe('SignUppComponent', () => {
  let component: SignUppComponent;
  let fixture: ComponentFixture<SignUppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
