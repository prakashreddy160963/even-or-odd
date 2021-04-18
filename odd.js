var num_1;

var output;
console.log("start");


function evenorodd() {
    num_1 = parseInt(document.getElementById('num').value);

    if(num_1 % 2 == 0) {
        console.log('even number');
        output = 'Even number';
        document.getElementById('result').value=output;
    }
    else {
        output = 'Odd number';
        document.getElementById('result').value=output;
    }
    return false;
}
console.log("End");