import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from './http.service';


describe('HttpService', () => {
    let service: HttpService;
    let httpClient: HttpClient;
    const parametros = new HttpParams();
    const respuestaGet = of({});
    const respuestaPost = of();
    const respuestaDelete = of(true);


    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });
        service = injector.inject(HttpService);
        httpClient = injector.inject(HttpClient);
        spyOn(httpClient, 'get').and.returnValue(
            respuestaGet
        );
        spyOn(httpClient, 'post').and.returnValue(
            respuestaPost
        );
        spyOn(httpClient, 'delete').and.returnValue(
            respuestaDelete
        );
    });

    it('deberia configurar el header', () => {
        const header = service.optsName('Name');
        expect(header.headers.get('xhr-name')).toBe('Name');
    });

    it('deberia hacer metodo get', () => {
        const respuesta = service.doGet('url');
        expect(httpClient.get).toHaveBeenCalledTimes(1);
        expect(respuesta).toEqual(respuestaGet);
    });

    it('deberia hacer metodo post', () => {
        const respuesta = service.doPost('url', {});
        expect(httpClient.post).toHaveBeenCalledTimes(1);
        expect(respuesta).toEqual(respuestaPost);
    });

    it('deberia hacer metodo delete', () => {
        const respuesta = service.doDelete('url');
        expect(httpClient.delete).toHaveBeenCalledTimes(1);
        expect(respuesta).toEqual(respuestaDelete);
    });

    it('deberia obtener los parametros', () => {
        const respuesta = service.doGetParameters('url', parametros);
        expect(httpClient.get).toHaveBeenCalledTimes(1);
        expect(respuesta).toEqual(respuestaGet);
    });

});
