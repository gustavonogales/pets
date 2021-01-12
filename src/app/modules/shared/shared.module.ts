import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule, PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    PoFieldModule,
    PoModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    PoFieldModule,
    PoModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
