import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 9,
  }

  courses;

  viewMode = 'map';

  canSave = true; 

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1 '},
      { id: 2, name: 'course2 '},
      { id: 3, name: 'course3 '}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

  onAdd(){
    this.courses.push({id: 4, name: 'course4'})
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = "UPDATED";
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs){
    console.log('Favorite changed!', eventArgs);
  }
}