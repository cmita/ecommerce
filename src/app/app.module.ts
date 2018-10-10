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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SomeResolveService } from './some-resolver.service';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddItemComponent,
    ViewItemComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true })
  ],
  providers: [SomeResolveService],
  bootstrap: [AppComponent],
  exports: [ContactComponent]
})
export class AppModule { }
