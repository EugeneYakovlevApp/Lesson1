const city1 = {
    'name':'City 17',
    'date':new Date("01.01.1929"),
    'population':'450000',
    'country':'Россия'
}

const city2 = {
    'name':'City 18',
    'date':new Date('01.04.1800'),
    'population':'400000',
    'country':'Россия'
}
const city3 = {
    'name':'City 19',
    'date':new Date("01.01.1929"),
    'population':'45001200',
    'country':'Россия'
}
const city4 = {
    'name':'City 20',
    'date':new Date("01.01.1929"),
    'population':'300',
    'country':'Россия'
}
const city5 = {
    'name':'City 21',
    'date':new Date("01.01.1929"),
    'population':'1',
    'country':'Россия'
}

let cites = [city1,city2,city3,city4,city5];


function sortByPopulation(arrayCities){
arrayCities.sort((first,second) => first.population - second.population);
for(entry of arrayCities){
    console.log('population ' + entry.population);    
}
console.log(arrayCities);
}