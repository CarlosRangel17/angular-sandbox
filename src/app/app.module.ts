// Services 
import { AuthorsService } from './services/authors.service';
import { CourseService } from './services/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordComponent } from './password/password.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SignupFormComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    PasswordComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    CourseService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
