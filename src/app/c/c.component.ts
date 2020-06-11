import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  @HostBinding('hidden')
  isHidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
