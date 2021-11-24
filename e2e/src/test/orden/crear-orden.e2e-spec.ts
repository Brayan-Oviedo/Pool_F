import { AppPage } from "../../app.po";
import { MenuPage } from "../../page/menu/menu.po";

describe('Crear orden', () => {

    let page: AppPage;
    let menu: MenuPage;

    beforeEach(() => {
        page = new AppPage();
        menu = new MenuPage();
    });

    it('deberia crear la orden', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuOrden();
        await menu.clickMenuCrearOrden();
    });
});