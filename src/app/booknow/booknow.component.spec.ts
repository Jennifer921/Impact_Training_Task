/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BooknowComponent } from './booknow.component';

describe('BooknowComponent', () => {
  let component: BooknowComponent;
  let fixture: ComponentFixture<BooknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
