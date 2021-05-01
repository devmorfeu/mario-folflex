import { Component, OnInit } from '@angular/core';
import * as Snackbar from "node-snackbar";
import * as $ from 'jquery';

import {Router} from "@angular/router";

@Component({
  selector: 'app-fase-tres',
  templateUrl: './fase-tres.component.html',
  styleUrls: ['./fase-tres.component.css']
})
export class FaseTresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $("#btn4").click(function () {
      $(".gorro").animate({ "left": "+=11.3%" }, "slow");
      $(".gorrodois").animate({ "left": "+=21.5%" }, "slow");
      $(".gorrotres").animate({ "left": "+=32.5%" }, "slow");
    });


    $("#btn4").click(function () {
      $("#btn5").css("display", "block");
    });

    $('#btn4').click(function () {
      $(this).prop("disabled", true);
    });

    $('#btn4').click(function() {
      Snackbar.show({text: 'BOA', pos: 'bottom-left'});
    });
    $('#btn1').click(function() {
      Snackbar.show({text: 'Puts, não é essa opção. Tente outra', pos: 'bottom-left'});
    });
    $('#btn2').click(function() {
      Snackbar.show({text: 'Pensa um pouquinho mais, olha as dicas no inicio da tela.', pos: 'bottom-left'});
    });
    $('#btn3').click(function() {
      Snackbar.show({text: 'Xii, não é essa não', pos: 'bottom-left'});
    });

  }
  goToFaseQuatro(){
    this.router.navigate(['nosso-jogo/fase-quatro'])
  }

}
