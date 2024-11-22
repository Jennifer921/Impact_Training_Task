/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebitTableComponent } from './debitTable.component';

describe('DebitTableComponent', () => {
  let component: DebitTableComponent;
  let fixture: ComponentFixture<DebitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
