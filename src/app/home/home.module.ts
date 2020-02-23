import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeHeaderComponent } from './components/home-header/home-header.component';

const route: Routes = [{
  path: '', component: HomeComponent
}];


@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class HomeModule {
}
