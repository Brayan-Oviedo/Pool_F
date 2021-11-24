import { browser, by, element } from 'protractor';

export class AppPage {
  appName = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/span[2]'));
  
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getAppName() {
    return this.appName.getText() as Promise<string>;
  }

}
