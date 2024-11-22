/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaladsComponent } from './salads.component';

describe('SaladsComponent', () => {
  let component: SaladsComponent;
  let fixture: ComponentFixture<SaladsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
