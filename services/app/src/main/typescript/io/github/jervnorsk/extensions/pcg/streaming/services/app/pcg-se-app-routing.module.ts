import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PcgSeTimerComponent} from "./features/timer/pce-se-timer.component";
import {PcgSePokemonComponent} from "./features/pokemon/pce-se-pokemon.component";
import {PcgSeSoundAlertComponent} from "./features/sound/alerts/pce-se-sound-alert.component";

const routes: Routes = [
  {
    path: 'info',
    children: [
      {
        path: 'events',
        children: [
          {
            path: "timer",
            component: PcgSeTimerComponent
          },
          {
            path: "show_current_pokemon",
            component: PcgSePokemonComponent,
            data: {
              event: "show",
              target: "current"
            }
          },
          {
            path: "sound_alert",
            component: PcgSeSoundAlertComponent,
            data: {
              gen: "i",
              type: "wild_battle"
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class PcgSeAppRoutingModule {
}
