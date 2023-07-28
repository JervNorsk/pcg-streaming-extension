import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("../../../../../../../../../../../modules/core/src/main/typescript/io/github/jervnorsk/extensions/pcg/streaming/services/app/api/pcg-se-api.module").then(it => it.PcgSeApiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class PcgSeAppRoutingModule {
}
