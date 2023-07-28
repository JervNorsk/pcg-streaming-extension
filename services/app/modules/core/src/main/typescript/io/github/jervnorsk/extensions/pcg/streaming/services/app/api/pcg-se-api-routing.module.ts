import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PcgSePokemonComponent} from "../features/pokemon/pce-se-pokemon.component";
import {PcgSeTimerComponent} from "../features/timer/pce-se-timer.component";
import {PcgSeSoundAlertComponent} from "../features/alerts/pce-se-sound-alert.component";

const routes: Routes = [
  {
    path: "info",
    children: [
      {
        path: "events",
        children: [
          {
            path: "show_current_pokemon",
            component: PcgSePokemonComponent,
            data: {
              event: "show",
              target: "current"
            }
          },
          {
            path: "spawn_cooldown",
            component: PcgSeTimerComponent
          },
          {
            path: "spawn_alert",
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcgSeApiRoutingModule {
}
