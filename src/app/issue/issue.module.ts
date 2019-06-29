import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import {RouterModule} from '@angular/router';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { FileSelectDirective,FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [DashboardComponent, IssueViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forChild([
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'issue/view/:issueId',
        component:IssueViewComponent
      }
    ])
  ]
})
export class IssueModule { }
