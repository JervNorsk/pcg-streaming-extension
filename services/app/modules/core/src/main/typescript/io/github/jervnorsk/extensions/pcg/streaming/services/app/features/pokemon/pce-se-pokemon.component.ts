import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {zip} from "rxjs";

@Component({
  template: ''
})
export class PcgSePokemonComponent implements OnInit {

  constructor(
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    zip([
      this.route.queryParamMap,
      this.route.data
    ]).subscribe(([queryParamMap, data]) => {
      const queryParams = new URLSearchParams();

      queryParamMap.keys.forEach(key => {
        queryParams.append(key, queryParamMap.get(key)!);
      });

      if (data["event"] === "show") {
        if (data["target"] === "current") {
          window.location.replace(
              `https://poketwitch.bframework.de/info/events/show_current_pokemon/?${queryParams.toString()}`
          )
        }
      }
    });
  }
}
