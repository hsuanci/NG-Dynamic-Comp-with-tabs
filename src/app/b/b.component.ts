import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  @HostBinding('hidden')
  isHidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
