const obj = {
    method1(){
        return this;
    },
    method2(){
        return this;
    },
    method3(){
        return "Метод 3";
    },
}

console.log(obj.method1().method2().method3());