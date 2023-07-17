import {NgModule} from '@angular/core';
import {PcgSeRoutingModule} from "./pcg-se-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {PcgSeAppComponent} from "./app/pce-se-app.component";
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
        PcgSeRoutingModule,

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
export class PcgSeModule {
}
