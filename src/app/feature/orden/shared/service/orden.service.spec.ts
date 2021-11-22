import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { OrdenService } from './orden.service';

describe('OrdenService', () => {
 // let httpMock: HttpTestingController;
 // let service: OrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdenService, HttpService]
    });
  //  httpMock = injector.inject(HttpTestingController);
 //   service = TestBed.inject(OrdenService);
  });

  it('should be created', () => {
    const ordenService: OrdenService = TestBed.inject(OrdenService);
    expect(ordenService).toBeTruthy();
  });
});
