import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './app/button/button.component';
import { AppComponent } from './app/app.component';

const initApp = async () => {
  const app = await createApplication({
    providers: [],
  });
  const button = createCustomElement(ButtonComponent, {
    injector: app.injector,
  });
  customElements.define('ang-button', button);
  // bootstrapApplication(AppComponent).catch((err) => console.error(err));
};
initApp();
