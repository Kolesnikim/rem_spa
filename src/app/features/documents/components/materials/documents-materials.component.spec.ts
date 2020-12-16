import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsMaterialsComponent } from './documents-materials.component';

describe('MaterialsComponent', () => {
  let component: DocumentsMaterialsComponent;
  let fixture: ComponentFixture<DocumentsMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
