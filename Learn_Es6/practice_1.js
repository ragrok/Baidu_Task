/**
 * Created by Administrator on 2016/8/15.
 */
//
// console.log(x === undefined);
// var x = 3;
//
// console.log(x);
//
//
// // if(true){
// //     let y = 5;
// // }
// //
// // console.log(y);
//
//
// var myvar = "my value";
//
// (function() {
//     var myvar;
//     console.log(myvar); // undefined
//     myvar = "local value";
// })();

/*
var foo = {a: "alpha",2: "two"};

console.log(foo.a);
console.log(foo['a']);*/

let i = 0;
let n = 0;
while (i < 5) {
    i++;
    console.log('i的值：'+i);
    if (i == 3)
        continue;
    n += i;
    console.log('n的值：'+n)
}

/*
* result:i的值：1
 n的值：1
 i的值：2
 n的值：3
 i的值：3
 i的值：4
 n的值：7
 i的值：5
 n的值：12
* */

