import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

// Components
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';


@NgModule({
  declarations: [UsersListComponent, UserDetailsComponent, UsersComponent, UserComponent],
  imports: [
    SharedModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
