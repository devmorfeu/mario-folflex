import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-fase-quatro',
  templateUrl: './fase-quatro.component.html',
  styleUrls: ['./fase-quatro.component.css']
})
export class FaseQuatroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#btn4").click(function () {
      $(".gorrodois").animate({"left":"+=23.5%"}, "fast")
      $(".gorrotres").animate({ "left": "+=45.5%" }, "fast");
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
}

  


