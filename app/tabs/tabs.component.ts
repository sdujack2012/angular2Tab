import {Component,Input,ViewEncapsulation,ContentChildren,QueryList} from '@angular/core';
import {Tab} from './tab.component';
@Component({
  selector: 'my-tabs',
  template: `
  <ul class="nav nav-tabs">
    <li *ngFor="let tab of tabs"  (click)="ToggleActive(tab)"><a [class.active]='tab.Active'>{{tab.Title}}</a> </li>
  </ul>
  <div class="tab-content">
    <ng-content></ng-content>
  </div>
  `
})
export class Tabs {
  @ContentChildren(Tab) childrenTabs: QueryList<Tab>;;
  tabs: Tab[];

  constructor(){
    this.tabs=[];
    
  }
  ngAfterContentInit(){
    this.childrenTabs.forEach(tab=>this.AddTab(tab));
  }
  AddTab(tab: Tab){
    if(this.tabs.length==0){
      tab.Active =true;
    }
    this.tabs.push(tab);
  }
  ToggleActive(tab:Tab){
    this.tabs.forEach(tab=>{tab.Active=false});
    tab.Active = true;

  }
}
