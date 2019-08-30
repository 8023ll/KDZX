// 1.0=====================================================ajax的封装
var baseURL = 'http://134.175.154.93:8099';

function getAjax(url, method, data, successFun, errorFun) {
    $.ajax({
        url: baseURL + url,
        method: method,
        data: data,
        success: successFun,
        error: errorFun
    });
}

// 2.0=================================================页面的增删改查
//删除单个
function deleteById(obj, url) {
    getAjax(url, 'GET', obj, function(res) {
        findAll();
    }, function(error) {
        console.log('error=====');
    });
}
//新增或修改
function saveOrUpdate(obj, url) {
    getAjax(url, 'POST', obj, function(res) {
        findAll();
    }, function(error) {
        console.log(error, '=====');
    });
}
//删除多个
function batchDelete(obj, url) {
    getAjax(url, 'POST', obj, function(res) {
        findAll();
    }, function(error) {
        console.log(error, '=====');
    });
}


//将js对象转换成表单格式数据
function encodeFormData(data) {
    if (!data) {
        return "";
    }
    var pairs = [];
    for (var name in data) {
        if (!data.hasOwnProperty(name)) {
            continue;
        }
        if (typeof data[name] == "function") {
            continue;
        }
        var value = data[name].toString();
        name = encodeURIComponent(name.replace("%20", "+")); //编码名字
        value = encodeURIComponent(value.replace("%20", "+")); //编码值
        pairs.push(name + "=" + value);
    }
    return pairs.join('&');
}


// user=======================修改用户的状态
function changeStatus(obj, url) {
    getAjax(url, 'POST', obj, function(res) {}, function(error) {
        console.log(error, '=====');
    });
}