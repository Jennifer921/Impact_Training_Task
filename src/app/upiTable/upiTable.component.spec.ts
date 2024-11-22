/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpiTableComponent } from './upiTable.component';

describe('UpiTableComponent', () => {
  let component: UpiTableComponent;
  let fixture: ComponentFixture<UpiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
