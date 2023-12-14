import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialMenuComponent } from './angular-material-menu/angular-material-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { MenuThreeComponent } from './menu-three/menu-three.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialMenuComponent,
    MenuOneComponent,
    MenuTwoComponent,
    MenuThreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
