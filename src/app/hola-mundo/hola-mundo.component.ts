import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  i = 0;
  @Input() hero: String;
  @Output() heroReturn = new EventEmitter<String>();
  @Output() likeIt = new EventEmitter<String>();


  constructor() {
    this.hero = "me caga existir";
   }

   like(){
     this.likeIt.emit(`Al chile mátate we ಠ⌣ಠ ${this.i}`);
     this.i++;
   }

  ngOnInit() {
    this.heroReturn.emit("kmara ue ya te respindí");
  }

}
