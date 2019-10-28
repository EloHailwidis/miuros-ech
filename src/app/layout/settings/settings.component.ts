import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  pagesizeFormControl = new FormControl(10, [
    Validators.required,
    Validators.min(0),
    Validators.pattern("^[0-9]*$"),
  ]);

  settingsForm = new FormGroup({
    pagesizeFormControl: this.pagesizeFormControl
  });

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    const pageSize = this.settingsService.getPageSize();
    this.settingsForm.controls['pagesizeFormControl'].setValue(pageSize);
  }

  saveSettings() {
    const pageSize = this.settingsForm.controls['pagesizeFormControl'].value;
    this.settingsService.set('pageSize', pageSize);
  }
}
