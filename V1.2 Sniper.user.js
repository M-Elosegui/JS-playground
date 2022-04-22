// ==UserScript==
// @name        V1.0 Snipe - Elosegui
// @namespace   DuxHut
// @include     https://*.tribalwars.com.*/*
// @grant       none
// @version     1.2
// @author      Elosegui
// @description 15/06/2021, 18:34:50
// ==/UserScript==


(() => {


// criar botao para comecar
 let botao = document.createElement("BUTTON");
 document.body.appendChild(botao);
 botao.innerHTML ="Preparar!";



//criar 2 campos de input
    var chegada = document.createElement("input");
    document.body.appendChild(chegada);

    var latencia = document.createElement("input");
    document.body.appendChild(latencia);


//inicio do script ao clicar no botao com os inputs preenchidos:
botao.onclick = contagem

//ao clicar, faz um timeout com a funcao de clicar no enviar ataque, e a funcao tempo que calcula o tempo para dar input ao timeout
    function contagem() {
         setTimeout( click, tempo());
  }

    function click() {
document.querySelector("#troop_confirm_go").click()
  }

//esta funcao tempo calcula o valor para enviar para o timeout lendo os 2 inputs. estou a dar o formato em "2021,0,20,9,30,0,500" e "100" no 1o e no 2o por exemplo
    function tempo() {

    var data = new Date();
    var dataactual = data.getTime();

    var datainput = document.querySelector("#ds_body > input:nth-child(17)").value
    var dataenvio = new Date(datainput);

    var latencia = document.querySelector("#ds_body > input:nth-child(18)").value

    var vtimeout = dataenvio - dataactual - latencia;

    return vtimeout;
}




})()







// document.querySelector("#troop_confirm_go").click()
// document.querySelector("#header_menu_link_map > a").click()
