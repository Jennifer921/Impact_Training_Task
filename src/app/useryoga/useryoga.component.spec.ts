/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UseryogaComponent } from './useryoga.component';

describe('UseryogaComponent', () => {
  let component: UseryogaComponent;
  let fixture: ComponentFixture<UseryogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseryogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseryogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
