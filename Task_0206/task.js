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
        console.log(event.target);
        if (event.target.hasChildNodes('button')){
            handler_data_event(event.target);
        }
    });
};

var reg = function (reg_text) {
    let reg = /[0-9]{1,}/;
    if(reg.test(reg_text) == false){
        alert('请输入数字');
        return;
    }else {
        return reg_text ? reg.test(reg_text) : '';
    }

};

//根据不同的button类型处理数据
var handler_data_event = function (target) {
    console.log('come in handler_data_event');
    //得到值和点击的button
    let input_text = $('task_input').value;
    let input_button = target.innerText;
    //验证是否是数字，其实可以使用isNaN来验证
    if (reg(input_text) &&　(input_text != null || input_text != '')) {
        //匹配button的类型,做不同的数据处理
        if (input_button === '左侧入') {
            console.log('unshift');
            data.unshift(input_text);
            hander_data();
            return;
        } else if (input_button === '右侧入') {
            console.log('push');
            data.push(input_text);
            hander_data();
            return;
        } else if (input_button === '左侧出' && data.length != 0) {
            console.log('shift');
             let first_data = data.shift();
             hander_data();
             alert('你删除的数据是：'+first_data);
             return;
        } else if (input_button === '右侧出' && data.length != 0) {
            console.log('pop');
             let last_data = data.pop();
             hander_data();
             alert('你删除的数据是:'+last_data);
            return;
        }
    }
};

//渲染数据
var hander_data = function () {
    let show_text_1 = '';
    if (data.length > 0){
        for(let i = 0; i < data.length;i++){
           show_text_1 += '<span style="font-size: 50px;margin: 10px;background: red;">'+data[i]+'</span>';
        }
    }
    show_text.innerHTML = data ? show_text_1 : '';
    console.log('finish');
};
//为div show_text设定代理事件
var add_text_event = function () {
   show_text.addEventListener('click',function (event) {
       if (event.target.hasChildNodes('span')){
           click_list_hander(event.target);
       }
   });
};

//点击队列的处理事件
var click_list_hander = function (target) {
    //删除数据
    let click_text = target.parentNode.firstChild.innerText;
    data.pop(click_text);
    //渲染
    hander_data();
};
var init = function () {
    //调用事件
    console.log('come in');
    add_button_event();
    add_text_event();
};

//调用init事件
init();
