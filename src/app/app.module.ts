import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ListVideosEmpComponent } from './components/list-videos-emp/list-videos-emp.component';
import { ListVideosCanComponent } from './components/list-videos-can/list-videos-can.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { TestUserTypeSwitchComponent } from './components/test-user-type-switch/test-user-type-switch.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    ListVideosEmpComponent,
    ListVideosCanComponent,
    AddLinkComponent,
    TestUserTypeSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents: [ AddLinkComponent],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
