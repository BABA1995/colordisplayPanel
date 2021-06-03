import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpanel',
  templateUrl: './colorpanel.component.html',
  styleUrls: ['./colorpanel.component.css']
})
export class ColorpanelComponent implements OnInit {
@Input() backgroundcolor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
