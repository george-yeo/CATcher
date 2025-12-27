import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../../core/models/issue.model';

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
