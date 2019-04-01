import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsePage } from './pulse.page';

describe('PulsePage', () => {
  let component: PulsePage;
  let fixture: ComponentFixture<PulsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PulsePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
