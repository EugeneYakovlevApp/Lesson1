"use strict";

let userFirstName = "Genadii";
let userLastName = "Bebureshvilli";
let userBirthDay;
let userBirthMonth;
let userBirthYear;
let userAge;

userBirthDay = prompt("Введите день рождения", "");
userBirthMonth = prompt("Введите месяц рождения", "");
userBirthYear = prompt("Введите год рождения", "");

userAge = 2022 - Number(userBirthYear);
alert("Фамилия : " + userLastName + " \n" 
      + "Имя : "  + userFirstName + " \n"
      + "Дата рождения : " + userBirthDay 
      + "." +userBirthMonth + "." + userBirthYear + "\n"
      + "Возраст : " + userAge);