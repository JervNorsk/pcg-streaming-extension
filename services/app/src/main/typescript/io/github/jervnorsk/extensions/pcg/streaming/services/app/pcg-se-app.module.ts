import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {PcgSeAppComponent} from "./pce-se-app.component";
import {PcgSeAppRoutingModule} from "./pcg-se-app-routing.module";
import {PcgSeTimerComponent} from "./features/timer/pce-se-timer.component";
import {PcgSePokemonComponent} from "./features/pokemon/pce-se-pokemon.component";
import {PcgSeSoundAlertComponent} from "./features/sound/alerts/pce-se-sound-alert.component";

@NgModule({
  declarations: [
    PcgSeAppComponent,
    PcgSeTimerComponent,
    PcgSePokemonComponent,
    PcgSeSoundAlertComponent
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
