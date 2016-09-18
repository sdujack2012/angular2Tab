import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {Tabs} from './tabs/tabs.component';
import {DclWrapper} from './tabs/dlc.component';
import {TestComponent} from './test.component';
@Component({
    selector: 'my-app',
    template: `
                <my-tabs>
                    <my-tab Title="FirstName">FirstName</my-tab>
                    <my-tab Title="344">344</my-tab>
                </my-tabs>
    
    `
})
export class AppComponent { 
    
    FirstName:string = 'Kai';
}

