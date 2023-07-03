import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorEditComponent } from './fornecedor-edit.component';

describe('FornecedorEditComponent', () => {
  let component: FornecedorEditComponent;
  let fixture: ComponentFixture<FornecedorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FornecedorEditComponent]
    });
    fixture = TestBed.createComponent(FornecedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
