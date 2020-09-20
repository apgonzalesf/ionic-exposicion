import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaDetailPage } from './receta-detail.page';

describe('RecetaDetailPage', () => {
  let component: RecetaDetailPage;
  let fixture: ComponentFixture<RecetaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
