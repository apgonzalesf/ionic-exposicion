import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaItemComponent } from './receta-item.component';

describe('RecetaItemComponent', () => {
  let component: RecetaItemComponent;
  let fixture: ComponentFixture<RecetaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
