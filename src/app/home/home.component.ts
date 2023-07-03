import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogging = true;
  //username$: Observable<any>;
  username: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
      //this.username$ = this.messageService.getMessage();

      this.messageService.getMessage().subscribe((data)=>{
        this.username = data['text'];
      });
      this.isLogging = false;
  }

}
