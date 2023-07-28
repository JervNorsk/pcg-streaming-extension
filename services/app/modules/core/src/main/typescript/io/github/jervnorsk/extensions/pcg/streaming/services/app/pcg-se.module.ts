import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PcgSeTimerComponent} from "./features/timer/pce-se-timer.component";
import {PcgSePokemonComponent} from "./features/pokemon/pce-se-pokemon.component";
import {PcgSeSoundAlertComponent} from "./features/alerts/pce-se-sound-alert.component";

@NgModule({
  declarations: [
    PcgSeTimerComponent,
    PcgSePokemonComponent,
    PcgSeSoundAlertComponent
  ],
  imports: [
    // Module
    // -------------------------------------------------------------------------------------------------------------

    // Feature
    // -------------------------------------------------------------------------------------------------------------

    // Foundation
    // -------------------------------------------------------------------------------------------------------------

    // Lib
    // -------------------------------------------------------------------------------------------------------------

    // Framework
    // -------------------------------------------------------------------------------------------------------------
    CommonModule,
  ],
  exports: [
      PcgSeTimerComponent,
      PcgSePokemonComponent,
      PcgSeSoundAlertComponent
  ]
})
export class PcgSeModule {
}
