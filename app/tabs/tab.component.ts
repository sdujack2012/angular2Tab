import {Component,Input} from '@angular/core';
import {Tabs} from './tabs.component';

@Component({
  selector: 'my-tab',
  template: `
  <div class="tab-content">
     <div *ngIf='Active' [class.active]='Active' [class.in]='Active' class="tab-pane fade">
      <ng-content></ng-content>
    </div>
  </div>
 
  `,
  styleUrls:['../../node_modules/bootstrap/dist/css/bootstrap.css','../../node_modules/bootstrap/dist/css/bootstrap-theme.css']
})
export class Tab {
 
  constructor(){
   
    
  }
  @Input()
    Title: string;
  Active:boolean;
}
