import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputpanel',
  templateUrl: './inputpanel.component.html',
  styleUrls: ['./inputpanel.component.css'],
})
export class InputpanelComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(7),
    Validators.pattern('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'),
  ]);
  hexaValue:any;

  constructor() {}

  ngOnInit(): void {}
}
