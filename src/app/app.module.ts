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
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { TestService } from './test.service';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddItemComponent,
    ViewItemComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  providers: [SomeResolveService, UserService, TestService],
  bootstrap: [AppComponent],
  exports: [ContactComponent]
})
export class AppModule {}
