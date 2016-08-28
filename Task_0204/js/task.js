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

var city_input = $('aqi-city-input');
var value_input = $('aqi-value-input');
var aqi_table = $('aqi-table');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

    let city_value = city_input.value.trim();
    console.log(city_value);
    let air_value = value_input.value.trim();
     //验证中文
    if (!/[a-zA-Z\u4e00-\u9fa5]/.test(city_value)) {
        alert('请输入字母或者中文');
        return;
    }
    //验证数字
    if (!/\d{1,}/.test(air_value)) {
        alert('请输入数字');
        return;
    }
    aqiData[city_value] = air_value;
    console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    let items = '<tr>' +
        '<td>城市</td><td>空气质量</td><td>操作</td>' +
        '</tr>';
        for (var i in aqiData) {
            items += '</tr><td>' + i + '</td>' +
                '<td>' + aqiData[i] + '</td>' +
                '<td><button>删除</button></td></tr>';
        }
    aqi_table.innerHTML = i ? items : "";
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
function delBtnHandle(target) {
    // do sth.
    let city_name = target.parentNode.parentNode.firstChild.innerHTML;
    delete aqiData[city_name];
    console.log('aqidate的值：'+aqiData);
    renderAqiList();
    console.log('finish');
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    $('add-btn').onclick = function () {
        addBtnHandle();
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    aqi_table.addEventListener('click',function (e) {
         //匹配button
         if (e.target.nodeName.toUpperCase() === 'BUTTON'){
             //调用处理方法
             delBtnHandle(e.target);
         }

     });
}

init();
