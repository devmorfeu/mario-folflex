import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import * as Snackbar from 'node-snackbar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fase-dois',
  templateUrl: './fase-dois.component.html',
  styleUrls: ['./fase-dois.component.css']
})
export class FaseDoisComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    $("#btn3").click(function () {
      $(".gorro").animate({ "left": "+=45.5%" }, "fast");
    });


    $("#btn3").click(function () {
      $("#btn5").css("display", "block");
    });

    $('#btn3').click(function () {
      $(this).prop("disabled", true);
    });

    $('#btn3').click(function() {
      Snackbar.show({text: 'BOA', pos: 'bottom-left'});
    });
    $('#btn1').click(function() {
      Snackbar.show({text: 'Puts, não é essa opção. Tente outra', pos: 'bottom-left'});
    });
    $('#btn2').click(function() {
      Snackbar.show({text: 'Pensa um pouquinho mais, olha as dicas no inicio da tela.', pos: 'bottom-left'});
    });
    $('#btn4').click(function() {
      Snackbar.show({text: 'Xii, não é essa não', pos: 'bottom-left'});
    });
  }

  goToFaseTres(){
    this.router.navigate(['nosso-jogo/fase-tres'])
  }
}



