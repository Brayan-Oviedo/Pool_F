import { by, element } from "protractor";


export class CrearOrden {
    private inputTiempoExtraOrden = element(by.id('tiempoExtraOrden'));
    private inputIdentificacionCliente = element(by.id('identificacionCliente'));
    private inputFechaNacimientoCliente = element(by.id('fechaNacimientoCliente'));
    private botonCrearOrden = element(by.id('crearOrden'));

    async clickInputTiempoExtra() {
        await this.inputTiempoExtraOrden.click();
    }

    async clickInputIdentificacionCliente() {
        await this.inputIdentificacionCliente.click();
    }

    async clickInputFechaNacimiento() {
        await this.inputFechaNacimientoCliente.click();
    }

    async clickBotonCrearOrden() {
        await this.botonCrearOrden.click();
    }
}