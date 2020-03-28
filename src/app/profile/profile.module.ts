import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { TranslateModule } from  '@ngx-translate/core';
import { HeaderModule } from '../header/header.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ProfilePageRoutingModule,
    HeaderModule,
    IonicStorageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
