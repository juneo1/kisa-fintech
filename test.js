// 콘솔출력
console.log('hello world!');
console.log('test');
console.log('test')

// 변수
var lastName = "Johnson";
console.log(lastName);

var x = {firstName:'John', lastName:'Doe'};
console.log(x);

var x = 16 + "Volvo"
console.log(x);

// Function
function sum(p1, p2){
    return p1 + p2;
};
console.log(sum(1,2))

function minus(p1, p2){
    return p1 - p2;
};
console.log(minus(5,3))

function multiple(p1, p2){
    return p1*p2;
};
console.log(multiple(6,9));

//object 
var car = {
    name : 'flat',
    model : '500',
    weight : '850kg',
    color : 'white',
    start : function() {
        console.log("engine is starting");
    }, 
    stop : function() {
        console.log("engine is stopped");
    },
    drive : function() {
        console.log("car is driving");
    }, 
    brake : function() {
        console.log("car is braking")
    }
}
console.log(car);
console.log(car.model);

// Array
var car1 = 'Saab';
var car2 = 'Volvo';
var car3 = 'BMW';

var cars = ['Saab', 'Volvo', 'BMW'];
var cars1 = [car1, car2, car3]

console.log(cars);
console.log(cars1);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// for-loop
var cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Flat', 'Audi'];
var text = "";
var i;
for (i = 0 ; i < cars.length; i++){
    console.log(cars[i]);
} 

for (var i = 0; i < 9; i++){
    console.log( i * 3);
}

// if 
for ( i = 0; i < cars.length; i++) {
    if (cars[i]== "BMW") {
        console.log('BMW 차량이 있습니다.');
    }
    else {
        console.log('BMW 차량이 없습니다');
    }
}

// 동기 비동기 함수
var fs = require('fs');

console.log('첫번 째 기능입니다.');
fs.readFile('example/test.txt', 'utf8', function (err, result) {
    if (err) {
        console.error(err);
        throw err;
    }
    else {
        console.error("두번 째 기능인데 파일을 읽어오느라 시간이.. 조금.. 걸려요");
        console.log(result);
    }
});
console.log('마지막 기능입니다.');



var fs = require('fs');
console.log('A');
var result  = fs.readFileSync('example/test.txt', 'utf8');
console.log(result);
console.log('C');