export class Cliente {

    identificacion: string;
    fechaNacimiento: Date;

    constructor(identificacion: string, fechaNacimiento: Date) {
        this.identificacion = identificacion;
        this.fechaNacimiento = fechaNacimiento;
    }
}
