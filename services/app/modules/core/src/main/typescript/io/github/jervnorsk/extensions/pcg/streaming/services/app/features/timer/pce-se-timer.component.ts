import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[pcg-se-timer]',
  template: ''
})
export class PcgSeTimerComponent implements OnInit {

  ngOnInit() {
    window.location.replace(
        "https://poketwitch.bframework.de/info/events/spawn_cooldown/"
    )
  }
}
