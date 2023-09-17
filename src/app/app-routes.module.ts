import {NgModule} from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { RouterModule } from '@angular/router';

type PathMatch = "full" | "prefix" | undefined;
const routes = [
  {path:'characters', component:TabsComponent, 
  children: [
    /*specify routes having nothing after characters
    if we don't specify pathMatch, then all url calls will go to '' as all the urls satisfy that conditon and it will go to infinite loop */
    {path:'', redirectTo:'all', pathMatch:'full' as PathMatch},
    {path:':chosenSide', component:ListComponent}
  ]
},
  {path:'new-character', component:CreateCharacterComponent},
  {path: '**', redirectTo:'/characters/all' /*component:TabsComponent*/}
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes),
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule{}