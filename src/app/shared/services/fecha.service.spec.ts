import { TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { FechaService } from './fecha.service';

describe('FechaService', () => {
  let service: FechaService;
  const fechaActualSinHora: string = moment().format('YYYY-MM-DD');
  const fechaActualConHora: string = moment().format('YYYY-MM-DD HH:mm:ss');

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia obtener la fecha actual', () => {
    const fecha = service.obtenerFechaActual();
    const fechaFormateada = moment(fecha).format('YYYY-MM-DD');
    expect(fechaFormateada).toBe(fechaActualSinHora);
  });

  it('deberia dar un formato sin hora a la fecha', () => {
    const fecha = moment().toDate();
    expect(moment(fecha).toString()).not.toBe(fechaActualSinHora);
    const fechaFormateada = service.formatearFechaSinHora(fecha);
    expect(fechaFormateada).toBe(fechaActualSinHora);
  });

  it('deberia dar un formato con hora a la fecha', () => {
    const fecha = moment().toDate();
    expect(fecha.toString()).not.toBe(fechaActualConHora);
    const fechaFormateada = service.formatearFechaConHora(fecha);
    const fechaFormateadaMoment = moment(fechaFormateada);
    const fechaActualMoment = moment(fechaActualConHora);

    expect(fechaFormateadaMoment.year).toBe(fechaActualMoment.year);
    expect(fechaFormateadaMoment.month).toBe(fechaActualMoment.month);
    expect(fechaFormateadaMoment.day).toBe(fechaActualMoment.day);
    expect(fechaFormateadaMoment.hour).toBe(fechaActualMoment.hour);
    expect(fechaFormateadaMoment.minutes).toBe(fechaActualMoment.minutes);
  });
});
