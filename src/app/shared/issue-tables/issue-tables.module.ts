import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginatorLocalStorageDirective } from '../../core/directives/paginator-local-storage.directive';
import { MaterialModule } from '../material.module';
import { IssueTablesComponent } from './issue-tables.component';
import { IssueTooltipComponent } from '../issue-tooltip/issue-tooltip.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  exports: [IssueTablesComponent],
  declarations: [IssueTablesComponent, PaginatorLocalStorageDirective, IssueTooltipComponent],
  imports: [CommonModule, MaterialModule, RouterModule, MarkdownModule.forChild()]
})
export class IssueTablesModule {}
