import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "./http.service";


describe('HttpService', () => {
    let service: HttpService;
    let httpClient: HttpClient;

    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });
        service = injector.inject(HttpService);
        httpClient = injector.inject(HttpClient);
        spyOn(httpClient, 'get');
        spyOn(httpClient, 'post');
        spyOn(httpClient, 'delete');
    });

    it('deberia configurar el header', () => {
        const header = service.optsName('Name');
        expect(header.headers.get('xhr-name')).toBe('Name');
    });

    it('deberia hacer metodo get', () => {
        service.doGet('url');
        expect(httpClient.get).toHaveBeenCalledTimes(1);
    });

    it('deberia hacer metodo post', () => {
        service.doPost('url', {});
        expect(httpClient.post).toHaveBeenCalledTimes(1);
    });
    
    it('deberia hacer metodo delete', () => {
        service.doDelete('url');
        expect(httpClient.delete).toHaveBeenCalledTimes(1);
    });

});