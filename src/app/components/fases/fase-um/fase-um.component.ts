import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import * as Snackbar from 'node-snackbar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fase-um',
  templateUrl: './fase-um.component.html',
  styleUrls: ['./fase-um.component.css']
})
export class FaseUmComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
    $("#btn1").click(function () {
      $(".gorro").animate({ "left": "+=88.5%" }, "slow");
    });


    $("#btn1").click(function () {
      $("#btn5").css("display", "block");
    });

    $('#btn1').click(function () {
      $(this).prop("disabled", true);
    });

    $('#btn1').click(function() {
      Snackbar.show({text: 'BOA', pos: 'bottom-left'});
    });
    $('#btn2').click(function() {
      Snackbar.show({text: 'Puts, não é essa opção. Tente outra', pos: 'bottom-left'});
    });
    $('#btn3').click(function() {
      Snackbar.show({text: 'Pensa um pouquinho mais, olha as dicas no inicio da tela.', pos: 'bottom-left'});
    });
    $('#btn4').click(function() {
      Snackbar.show({text: 'Xii, não é essa não', pos: 'bottom-left'});
    });

  }
  goToFaseDois(){
    this.router.navigate(['nosso-jogo/fase-dois'])
  }
}
