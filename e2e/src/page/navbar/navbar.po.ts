import { by, element } from 'protractor';

export class NavbarPage {

    menu = element(by.id('menu'));
    paginaActual = element(by.id('paginaActual'));

    async getBotonMenu() {
        return this.menu;
    }

    async obtenerPaginaActual() {
        await this.paginaActual.getText();
    }
}
