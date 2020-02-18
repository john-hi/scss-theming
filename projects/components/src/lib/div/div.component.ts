import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DivComponent implements OnInit {

  public ngOnInit(): void {
    return;
  }

}
