import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IUser } from './../../../core/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnChanges {
  userForm = this.fb.group({
    name: [''],
    userName: [''],
    address: [''],
    company: ['']
  });

  @Input() user: IUser;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && this.user) {
      this.patchFormValues(this.user);
    }
  }

  patchFormValues(user: IUser) {
    const { name, username, company, address} = user;
    this.userForm.patchValue({
      name,
      userName: username,
      address: `${address.zipcode}, ${address.city}, ${address.street}, ${address.suite}`,
      company: company.name
    });
  }
}
