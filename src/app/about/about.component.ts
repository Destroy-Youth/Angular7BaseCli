import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConsumeService } from '../services/consume.service';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    message : String;
    recibedMessage : String;
  joke: String = "";
  constructor(private _consumeService: ConsumeService,
              private _data: DataService) { }

  ngOnInit() {
      this.message = "cosa de about";
   }

  consulta(){
    this._data.setIsLoadingEvent(true);
    this._consumeService
        .getJoke()
        .subscribe((response) => {
            console.log(response);
            this.joke = response.value.joke;
            this.message = this.joke;
            this._data.setIsLoadingEvent(false);
        },
        (err) => {
            console.error(err);
            this._data.setIsLoadingEvent(false);
        })
    }

    raiseNotification() {
        this._data.setGeneralNotificationMessage('Notificación de prueba');
    }

}
