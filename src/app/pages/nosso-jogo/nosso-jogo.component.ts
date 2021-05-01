import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nosso-jogo',
  templateUrl: './nosso-jogo.component.html',
  styleUrls: ['./nosso-jogo.component.css']
})
export class NossoJogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
