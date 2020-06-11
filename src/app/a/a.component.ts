import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  @HostBinding('hidden')
  isHidden: boolean = false;
  input = 'A';
  constructor() { }

  ngOnInit(): void {
  }

}
