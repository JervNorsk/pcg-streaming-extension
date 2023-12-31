import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {PcgSeAppComponent} from "./pce-se-app.component";
import {PcgSeAppRoutingModule} from "./pcg-se-app-routing.module";

@NgModule({
  declarations: [
    PcgSeAppComponent,
  ],
  imports: [
    // Module
    // -------------------------------------------------------------------------------------------------------------
    PcgSeAppRoutingModule,

    // Feature
    // -------------------------------------------------------------------------------------------------------------

    // Foundation
    // -------------------------------------------------------------------------------------------------------------

    // Lib
    // -------------------------------------------------------------------------------------------------------------

    // Framework
    // -------------------------------------------------------------------------------------------------------------
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    // Module
    // -------------------------------------------------------------------------------------------------------------
    PcgSeAppComponent
  ]
})
export class PcgSeAppModule {
}
