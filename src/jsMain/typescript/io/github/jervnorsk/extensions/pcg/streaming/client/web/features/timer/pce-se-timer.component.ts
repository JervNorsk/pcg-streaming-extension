import {Component, OnInit} from '@angular/core';

@Component({
    template: ''
})
export class PcgSeTimerComponent implements OnInit {

    ngOnInit() {
        window.location.replace(
            "https://poketwitch.bframework.de/info/events/spawn_cooldown/"
        )
    }
}
