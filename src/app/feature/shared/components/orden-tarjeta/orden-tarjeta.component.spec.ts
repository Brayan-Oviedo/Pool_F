import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@core/material.module';

import { OrdenTarjetaComponent } from './orden-tarjeta.component';

describe('OrdenTarjetaComponent', () => {
  let component: OrdenTarjetaComponent;
  let fixture: ComponentFixture<OrdenTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenTarjetaComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
