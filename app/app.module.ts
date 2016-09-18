import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DclWrapper} from './tabs/dlc.component';
import {TestComponent} from './test.component';
import {Tabs} from './tabs/tabs.component';
import {Tab} from './tabs/tab.component';
import { AppComponent}  from './app.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [ BrowserModule ,FormsModule],
  declarations: [ AppComponent ,TestComponent,Tabs,Tab],
  entryComponents: [ TestComponent,AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
