import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {PcgSeAppModule} from "./pcg-se-app.module";

platformBrowserDynamic()
    .bootstrapModule(PcgSeAppModule)
    .catch(err => console.error(err));
