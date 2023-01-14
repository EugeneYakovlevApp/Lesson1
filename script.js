"use strict";

let userFirstName = "Genadii";
let userLastName = "Bebureshvilli";
let userAge;

let userBirthDay = prompt("Введите день рождения", "");
let userBirthMonth = prompt("Введите месяц рождения", "");
let userBirthYear = prompt("Введите год рождения", "");

userAge = 2022 - Number(userBirthYear);

alert("Фамилия : " + userLastName + " \n" 
      + "Имя : "  + userFirstName + " \n"
      + "Дата рождения : " + userBirthDay 
      + "." +userBirthMonth + "." + userBirthYear + "\n"
      + "Возраст : " + userAge);