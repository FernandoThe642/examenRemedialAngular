import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAmortizacionComponent } from './tabla-amortizacion.component';

describe('TablaAmortizacionComponent', () => {
  let component: TablaAmortizacionComponent;
  let fixture: ComponentFixture<TablaAmortizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAmortizacionComponent]
    });
    fixture = TestBed.createComponent(TablaAmortizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
