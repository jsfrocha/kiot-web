import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { InlineSVGDirective } from "./directives/inline-svg.directive";
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    IconComponent,
    InlineSVGDirective,
  ],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule {}
