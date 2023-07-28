import {NgModule} from '@angular/core';
import {PcgSeApiRoutingModule} from "./pcg-se-api-routing.module";
import {CommonModule} from "@angular/common";
import {PcgSeModule} from "../pcg-se.module";

@NgModule({
  imports: [
    // Module
    // -------------------------------------------------------------------------------------------------------------
    PcgSeModule,
    PcgSeApiRoutingModule,

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
  providers: []
})
export class PcgSeApiModule {
}
