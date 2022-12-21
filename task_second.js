const firstCityMgn = {
    'name':'Магнитогорск',
    'date':new Date("01.01.1929"),
    'population':'450000',
    'country':'Россия',
    showFullInformation
}
const secondCity17 = {
    'name':'City 17',
    'date':new Date('01.04.1800'),
    'population':'400000',
    'country':'Россия',
    showFullInformation
}

const thirdCity = {}
const fourthCity= {}
    for(let entry in firstCityMgn){
        thirdCity[entry] = firstCityMgn[entry];
    }
Object.assign(fourthCity,secondCity17);

thirdCity.name = "Магадан";
thirdCity.date = new Date("02.02.1982");

fourthCity.name = "Новотроицк";
fourthCity.date = new Date("03.03.1983");


function showFullInformation(){
    console.log("Город " + this.name + " был основан в "
        + this.date
        + " и расположен в стране " + this.country + ", численность населения города составляет " + this.population + " человек.");
}

showAllCitiesInformation();

function showAllCitiesInformation(){
    firstCityMgn.showFullInformation();
    secondCity17.showFullInformation();
    thirdCity.showFullInformation();
    fourthCity.showFullInformation();
}