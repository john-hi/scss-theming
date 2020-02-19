import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss', './_inline-theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class DivComponent implements OnInit {

  public ngOnInit(): void {
    return;
  }

}
