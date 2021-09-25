import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home.component';
import { AddUserComponent } from "./../../components/add-user/add-user.component";
import { UserListComponent } from "../../components/user-list/user-list.component";

import { UserService } from "./../../services/user.service";

const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    UserService
  ]
})

export class HomeModule {
}