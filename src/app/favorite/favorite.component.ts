import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs{
  newValue: boolean;
}

@Component({
  selector: 'favorite',
  // Can only use one or the other template options 
  // - If you're template is more than 5 lines of code, it's better to use the TemplateURL option 
  // - If you're template is less than 5 lines of code, it's better to use the Template option 
  templateUrl: './favorite.component.html',
  styles: [
    `
    .glyphicon {
      color: green;
    }

    .glyphicon-star {
      background: black;
    }
    `
  ],
  styleUrls: ['./favorite.component.css'],
  // ViewEncapsulation is an enum defined in Angular 4 from '@angular/core'
  // encapsulation: ViewEncapsulation.Native ViewEncapsulation.Emulated ViewEncapsulation.None
})
export class FavoriteComponent {
  // Component Decorator - Input 
  // This field is exposed to the outside & can be binded within our template 
  @Input('isFavorite') isSelected: boolean;
  // Component Decorator - Output 
  // The name of this field should be exactly the same name as the event we want to raise 
  // Must initialize this field with an instance of the EventEmitter class - note it's not a primitive type 
  @Output('change') click = new EventEmitter(); 

  toggleFavorite(){
    this.isSelected = !this.isSelected;
    // Use event emitter, use .emit() to raise/pubslish an event 
    // This simply notifies others that something has happened 
    // Here in this emit function, you can optionaly pass some value 
    // - this value will be available to all subscribers of this event  
    // this.change.emit(this.isSelected);
    this.click.emit({newValue: this.isSelected});
  }
}
