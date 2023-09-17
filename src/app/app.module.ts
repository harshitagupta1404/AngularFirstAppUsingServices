import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CharacterService } from './characters.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CharacterService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
