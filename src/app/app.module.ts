import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { ROUTES } from './app.routing.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddItemComponent,
    ViewItemComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ContactComponent]
})
export class AppModule { }
