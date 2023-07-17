import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {PcgSeModule} from "./pcg-se.module";

platformBrowserDynamic()
    .bootstrapModule(PcgSeModule)
    .catch(err => console.error(err));
