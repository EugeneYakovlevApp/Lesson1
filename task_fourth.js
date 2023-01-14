const order = {
    name: "Заказ",
    description: "Суши по мексикански",
    cost: 1,
    curr: "EUR",
    company: "Yazichok dostavka",
    date: new Date("04.04.1922")
}

const unfilledOrder = {
    description: "Суши по мексикански",
    cost: 1,
    curr: "EUR",
}

function infoAboutOrder(obj) {
    validation();
    
    obj = setDefault(obj);

    function validation() {
        if (!obj.name || !obj.description || !obj.cost || obj.cost < 0 || !obj.curr || !obj.company || !obj.date) {
            console.log("Ошибка в данных");
        } else {
            console.log("данные прошли проверку успешно");
        }
    }
}


function setDefault({ name = "defName", description = "defDesctiption", cost = 2, curr = "RUB", company = "defCOmp", date = new Date("04.04.2000") }) {

    return {
        name, description, cost, curr, company, date
    };
}