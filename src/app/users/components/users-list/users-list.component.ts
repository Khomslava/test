import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

import { IUser } from './../../../core/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'email'];
  dataSource: MatTableDataSource<any>;

  @Input() users: IUser[];
  @Output() selectedUser = new EventEmitter<IUser>();

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users && this.users) {
      this.dataSource = new MatTableDataSource(this.users);
      this.changeDetectorRef.markForCheck();
    }
  }

  navigateToUserDetails(user: IUser) {
    this.selectedUser.emit(user);
    this.router.navigate([`/users/${user.id}`]);
  }
}
