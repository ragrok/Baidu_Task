
var $ = function (id) {
     return document.getElementById(id);
};

var button_event = $('button_event');
var show_text = $('show_text');

//放置存放数据的数组
var data = [];

//为div button_event设定代理事件
var add_button_event = function () {
    button_event.addEventListener('click',function (event) {
        if (event.target.toUpperCase() === 'BUTTON'){
            hander_data_event(event.target);
        }
    });
};

//根据不同的button类型处理数据
var hander_data_event = function (target) {
   console.log(target);
    //匹配button的类型,做不同的数据处理
    if (){

    }else if(){

    }else if(){

    }els if (){

    }
    //渲染
    hander_data();
};

//渲染数据
var hander_data = function () {

};
//为div show_text设定代理事件
var add_text_event = function () {
   show_text.addEventListener('click',function () {
        click_list_hander(e.target);
   });
};

//点击队列的处理事件
var click_list_hander = function (target) {
    //删除数据

    //渲染
    hander_data();
}
var init = function () {
    //调用事件
    add_button_event();
    add_text_event();
};

//调用init事件
init();
