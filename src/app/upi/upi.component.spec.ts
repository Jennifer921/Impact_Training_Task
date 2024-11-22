/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpiComponent } from './upi.component';

describe('UpiComponent', () => {
  let component: UpiComponent;
  let fixture: ComponentFixture<UpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
