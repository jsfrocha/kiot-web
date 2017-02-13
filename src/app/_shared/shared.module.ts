import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IconsModule} from "../_modules/IconsModule/icons.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule,
    IconsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    IconsModule
  ]
})
export class SharedModule { }
