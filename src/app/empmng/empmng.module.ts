import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import {UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../pipe/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


export const routes:Routes=[
  {path:'',component:EmplistComponent},
  {path:'addemp',component:AddempComponent},
  {path:'editemp/:id',component:EditempComponent}
]


@NgModule({
  declarations: [
    EmplistComponent,
    AddempComponent,
    EditempComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarComponent,
    RouterLink,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,
    SearchPipe,
    NgxPaginationModule
  ]
})
export class EmpmngModule { }
