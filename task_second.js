let array = [45, 78, 10, 3];
function my(a, b) {
    // console.log(a + b);
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
}

// function transform(array){
//     console.log(this);
// }

Array.prototype.trans = function () {
    console.log('Изначальный массив :');

    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }

    console.log('массив суммы цифр каждого числа :');

    for (let i = 0; i < this.length; i++) {
        let sum = 0;
        while (this[i] > 0) {
            sum += this[i] % 10;
            this[i] = Math.floor(this[i] / 10);

        }
        this[i] = sum;
        
        console.log(Math.round(sum));

    }
}