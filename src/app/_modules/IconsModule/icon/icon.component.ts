import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'edp-icon',
  templateUrl: './icon.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() isBaselineIcon: boolean = false;
  @Input() iconPath: string = '';
  @Input() iconSize: string = 'small';

  constructor() { }

  ngOnInit() {
  }

}
