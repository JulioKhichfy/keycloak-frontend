import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username$: Observable<any>;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
      this.username$ = this.messageService.getMessage();
  }

}
