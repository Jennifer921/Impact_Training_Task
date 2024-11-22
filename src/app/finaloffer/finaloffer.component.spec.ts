/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinalofferComponent } from './finaloffer.component';

describe('FinalofferComponent', () => {
  let component: FinalofferComponent;
  let fixture: ComponentFixture<FinalofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
