const firstCityMgn = {
    'name': 'Магнитогорск',
    'date': new Date("01.01.1929"),
    'population': '450000',
    'country': 'Россия',
    showFullInformation
}

const secondCity17 = {
    'name': 'City 17',
    'date': new Date('01.04.1800'),
    'population': '400000',
    'country': 'Россия',
    showFullInformation
}

function compareName(firstCity, secondCity) {
    let text = firstCity.name;

    if (firstCity.name.length > secondCity.name.length) {
        text += " название длиннее, чем ";
    } else {
        text += " название короче, чем ";
    }

    text += secondCity.name;

    console.log(text);
}

function compareDate(firstCity, secondCity) {
    let text = firstCity.name;

    if (firstCity.date > secondCity.date) {
        text += " был основан позже, чем ";
    } else {
        text += " был основан раньше, чем ";
    }

    text += secondCity.name;

    console.log(text);
}

function comparePopulation(firstCity, secondCity) {
    let text = firstCity.name + " с популяцией в " + firstCity.population;

    if (firstCity.population > secondCity.population) {
        text += " больше, чем  ";
    } else {
        text += " меньше, чем ";
    }
    
    text += secondCity.name + "  с популяцией " + secondCity.population;

    console.log(text);
}

function showFullInformation() {
    console.log("Город " + this.name + " был основан в "
        + this.date
        + " и расположен в стране " + this.country + ", численность населения города составляет " + this.population + " человек.");
}