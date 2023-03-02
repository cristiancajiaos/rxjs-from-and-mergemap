import { Component, OnInit } from '@angular/core';
import { MiscService } from '../services/misc.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public letterArr: string[] = ['a', 'b', 'c'];
  constructor(
    private miscService: MiscService
  ) { }

  ngOnInit() {
    this.miscService.foo(this.letterArr).subscribe(value => {
      console.log(value);
    });
  }

}
