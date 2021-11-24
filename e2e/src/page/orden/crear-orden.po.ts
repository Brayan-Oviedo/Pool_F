import { by, element } from "protractor";


export class CrearOrdenPage {
    private inputTiempoExtraOrden = element(by.id('tiempoExtraOrden'));
    private inputIdentificacionCliente = element(by.id('identificacionCliente'));
   // private inputFechaNacimientoCliente = element(by.id('fechaNacimientoCliente'));
    private pickerFechaNacimientoCliente = element(by.id('pickerFechaNacimiento'));
    private botonCrearOrden = element(by.id('crearOrden'));
    private swal = element(by.className('swal2-title'));

    private aniosPicker = element(by.xpath('html/body/div[1]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/mat-calendar-header/div/div/button[1]'));
    private botonAtrasAniosPicker = element(by.xpath('html/body/div[1]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/mat-calendar-header/div/div/button[2]'));
    private botonAnioPicker = element(by.xpath('html/body/div[1]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-multi-year-view/table/tbody/tr[3]/td[2]'));
    private botonMesPicker = element(by.xpath('html/body/div[1]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-year-view/table/tbody/tr[3]/td[2]'));
    private botonDiaPicker = element(by.xpath('html/body/div[1]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-month-view/table/tbody/tr[5]/td[4]'));


    async setInputTiempoExtra(tiempoExtra: number) {
        await this.inputTiempoExtraOrden.clear();
        await this.inputTiempoExtraOrden.sendKeys(tiempoExtra);
    }

    async setInputIdentificacionCliente(identificacion: string) {
        await this.inputIdentificacionCliente.clear();
        await this.inputIdentificacionCliente.sendKeys(identificacion);
    }

    async clickPickerFechaNacimiento() {
        await this.pickerFechaNacimientoCliente.click();
    }

    async clickAniosPickerFechaNacimiento() {
        await this.aniosPicker.click();
    }

    async clickBotonAtrasAniosPicker() {
        await this.botonAtrasAniosPicker.click();
    }

    async clickBotonAnioPicker() {
        await this.botonAnioPicker.click();
    }

    async clickBotonMesPicker() {
        await this.botonMesPicker.click();
    }

    async clickDiaPicker() {
        await this.botonDiaPicker.click();
    }

    async clickBotonCrearOrden() {
        await this.botonCrearOrden.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }
}