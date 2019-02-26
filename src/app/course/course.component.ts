import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'courses',
  // templateUrl: './course.component.html',
  // -------------------------------------------------------------------------------------------
  // When Angular compiles our templates, it translates the interpolations into property bindings
  // Instead of using interpolation, you can use property binding syntax 
  // -- src="{{imageUrl}}" translates to <img [src]="title" /> after compilation
  // Q: Should we use string interpolation or the square bracket syntax? 
  // A: Interpolation works well when adding dynamic values in headings, divs, spans, paragraphs (whenever you want to render text)
  // A: Square brackets is used to be cleaner/shorter, and it works only one way (Component to the DOM) 
  //    - any changes in the component will reflect through the DOM
  // -------------------------------------------------------------------------------------------
  // **** Attribute Binding **** 
  // template: `
  //   <h2> {{title}} </h2>
  //   <img src="{{imageUrl}}" />
  //   <img [src]="title" />
  //   <table>
  //     <tr>
  //         <td [attr.colspan]=""> </td>
  //     </tr>
  //   </table>
  // `,
  // -------------------------------------------------------------------------------------------
  // **** Style Binding **** 
  //   template: `
  //   <button [style.color]="isActive ? 'black' : 'white'" class="btn btn-danger" [class.active]='isActive'>Save</button>
  // `,
  // ------------------------------------------------------------------------------------------- 
  // **** Event Binding / Event Bubbling **** 
  // $event is something known to Angular - represents a DOM event
  // template: `
  //   <div (click)="onDivClick()">
  //     <button (click)="onSave($event)">Save</button>
  //   </div>
  // `,
  // ------------------------------------------------------------------------------------------- 
  // **** Event Filtering **** 
  // This example demonstrates the traditional way of handling a specific key-stroke event
  //  template: `
  //   <input (keyup)="onKeyUp($event)" />
  // `,
  // Event filtering simplifies capturing key strokes
  // template: `
  //   <input (keyup.enter)="onKeyUp()" />
  // `,
  // ------------------------------------------------------------------------------------------- 
  // **** TEMPLATE VARIABLES **** 
  // This example demonstrates the traditional way of capturing a value through the $event.target.value 
  // template: `
  //   <input (keyup.enter)="onKeyUp($event)" />
  // `,
  // To create Template variables, the syntax is as follows - #variableName 
  // template: `
  //   <input #email (keyup.enter)="onKeyUp(email.value)" />
  // `,
  // ------------------------------------------------------------------------------------------- 
  // **** TWO-WAY BINDING **** 
  // Can capture anything in the keyup event
  // template: `
  //   <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
  // `,
  // Instead of using property binding on the value property, use two-way binding syntax [()] - banana in a box
  // ngModel directive used for two-way binding
  // To use ngModel, you must explicitly import Forms  
  //  template: `
  //   <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  // `,
  //   template: `
  //   <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  // `,
  // ------------------------------------------------------------------------------------------- 
  // **** Pipes ****
  // Can chain multiple pipes per value
  // (1) Number pipe 
  // - called decimal pipe
  // - can supply an argument: [number of integer digits].[minimum # of digits  after decimal point]-[maximum # of digits after decimal point]
  // - can provide leading 0's with first argument
  // (2) Currency pipe
  // - contains 3 arguments: [currencyType], [bool to display currency symbol], [number pipe min/max]
  // (3) Date pipe
  // - see more date formats at Angular.io/api/common/DatePipe
  // template: `
  //   {{ course.title | uppercase | lowercase }} <br/>
  //   {{ course.students | number }} <br/>
  //   {{ course.rating | number:'2.1-1' }} <br/>
  //   {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
  //   {{ course.releaseDate | date:'shortDate' }}
  // `,
  // ------------------------------------------------------------------------------------------- 
  // **** Custom Pipes ****
   template: `
    {{ text | summary:10 }}
  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  email = "me@example.com"
  title = "List of courses"
  imageUrl = "http://lorempixel.com/400/200";
  courses; 
  isActive = true;
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  text = `
    Lorem Ipsum is simply dummy text of the printing and typeset...
  `

  constructor(service: CourseService){
    this.courses = service.getCourses();
  }  

  onDivClick($event){
    console.log('Div was clicked');
  }

  onSave($event) {
    $event.stopPropagation(); // This will stop event bubbling

    console.log('button was clicked', $event);
  }

  // Demonstrating two-way binding
  onKeyUp(){
    console.log(this.email);
  }

  // Traditional way of capturing an input value via $event.target.value
  // onKeyUp($event){
  //   console.log($event.target.value);
  // }
  // Using template variable 
  // onKeyUp(email){
  //   console.log(email);
  // }

  // Don't need the $event for the event filtering 
  // onKeyUp(){
  //   console.log('ENTER was pressed');
  // }
  // onKeyUp($event){
  //   // Traditional way of detected key code 
  //   if($event.keyCode === 13) console.log('ENTER was pressed');
  // }
}
