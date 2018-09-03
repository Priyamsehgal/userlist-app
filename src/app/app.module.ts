import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ArticleService } from './article.service';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterComponent } from './register/register.component';

const appRoutes:Routes=[

{
  path:'',redirectTo: 'userlist',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'register',component:RegisterComponent}

 
 
   
 /* {path:'**',component:PageNotFoundComponent},*/
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    IndexComponent,
    UserdataComponent,
    UserlistComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }


