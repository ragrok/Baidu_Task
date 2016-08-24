//研究for in 与 for of 的区别
var fun1 = function () {
    let arr = [3,5,7];
    arr.foo = "hello";

//遍历数组下标
    for(let i in arr){
        console.log('for in 中的 i'+i);
    }

//拿到值
    for(let i of arr){
        console.log('for of 中的 i'+i);
    }
};
//研究递归对堆栈函数的使用
//先进后出，符合栈的要求（first in  last out）
var fun2 = function () {
    function foo1(i) {
         if(i < 0){
             return;
         }
        console.log('begin i:'+ i);
        foo1(i - 1);
        console.log('end' + i);
    }

     foo1(3);

};

var fun3 = function () {
    function outside(x) {
        function inside(y) {
            return x + y;
        }
        return inside;
    }
// Think of it like: give me a function that adds 3 to whatever you give it
    fn_inside = outside(3);
    console.log(fn_inside);
        result = fn_inside(5); // returns 8
    console.log(result);
    result1 = outside(3)(5); // returns 8
    console.log(result1);
}
var fun4 = function () {
    function outside() {
        var x = 10;
        function inside(x) {
            return x;
        }
        return inside;
    }
    result = outside()(20); // returns 20 instead of 10
    console.log(result);

    /*命名冲突发生在return x上，inside的参数x和外部变量x发生了冲突。
    这里的作用链域是{inside, outside, 全局对象}。因此inside具有最
    高优先权，返回了传入的20而不是外部函数的变量值10。*/
};

fun4();

