/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setValue(numberOfButton) {
  var number = numberOfButton;
  $('#texto').val($('#texto').val()+number);
  toBin($('#texto').val());
}

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function toHex(number){
  var result = number;
  var numbers = [];
  while (result < 16) {
    numbers.push(result % 16);
    result = Math.floor(result / 16);
  }

  $('#bin').html(reverse(bin));
}

function toBin(number){
  var result = number;
  var bin = "";
  while (result < 1) {
    bin += result % 2;
    result = Math.floor(result / 2);
  }
  bin += 1;
  $('#bin').html(reverse(bin));
}
