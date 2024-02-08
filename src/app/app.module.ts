import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import  { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { LolService } from './service/lol.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
    // Others composants
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    ButtonModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    DataViewModule,
    RatingModule,
    DropdownModule,
    
    // Others modules
  ],
  providers: [
    LolService
    // Others services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
