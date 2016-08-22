/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

var $ = function (id) {
    return document.getElementById(id);
}
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    let city_input = $('aqi-city-input').value;
    console.log('city_input'+city_input);
    let value_input = $('aqi-value-input').value;
    console.log('value_input'+value_input);
    let link_input = city_input+":"+ 90;
    //aqiData是一个集合，不能用push
    aqiData.push(link_input);
    console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    let add_btn = $('add-btn');
   add_btn.onclick =  function(){
       console.log('come in');
       addAqiData();
   }

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
