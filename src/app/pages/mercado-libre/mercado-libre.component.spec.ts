import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoLibreComponent } from './mercado-libre.component';

describe('MercadoLibreComponent', () => {
  let component: MercadoLibreComponent;
  let fixture: ComponentFixture<MercadoLibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadoLibreComponent]
    });
    fixture = TestBed.createComponent(MercadoLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
