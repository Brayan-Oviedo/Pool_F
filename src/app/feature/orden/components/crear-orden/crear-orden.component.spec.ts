import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@core/material.module';

import { CrearOrdenComponent } from './crear-orden.component';

describe('CrearOrdenComponent', () => {
  let component: CrearOrdenComponent;
  let fixture: ComponentFixture<CrearOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOrdenComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});