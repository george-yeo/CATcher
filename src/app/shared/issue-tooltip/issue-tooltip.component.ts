import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../../core/models/issue.model';

export enum ACTION_BUTTONS {
  VIEW_IN_WEB,
  MARK_AS_RESPONDED,
  MARK_AS_PENDING,
  RESPOND_TO_ISSUE,
  FIX_ISSUE,
  DELETE_ISSUE,
  RESTORE_ISSUE
}

@Component({
  selector: 'app-issue-tooltip',
  templateUrl: './issue-tooltip.component.html',
  styleUrls: ['./issue-tooltip.component.css']
})
export class IssueTooltipComponent implements OnInit {
  @Input() issue: Issue;

  constructor() {}

  ngOnInit(): void {}
}
