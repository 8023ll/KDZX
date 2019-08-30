// 背景色铺满
var height=$(window).height();
$('.modal,.modal-dialog,.modal-dialog,.ad_aside,.ad_section').attr('style', 'height:'+height+'px');
$(window).resize(function(){
    var height=$(window).height();
    $('.modal,.ad_aside,.ad_section').attr('style', 'height:'+height+'px');
});

// 1.0处理点击切换页面
$(function() {
    //初始化面包屑导航
    $('.ad_content').load('./pages/home.html');
    $('.breadcrumb li.active').text('首页');
    // $('.ad_aside .menu ul li a').trigger('click');
    //给导航绑定点击事件
    $('.ad_aside .menu ul li a').click(function(event) {
        var title = $(this).text().trim();
        $(this).parent().addClass('now').siblings().removeClass('now');
        switch (title) {
            case '首页':
                // 加载页面
                $('.ad_content').load('./pages/home.html');
                break;
            case '栏目管理':
                // 加载页面
                $('.ad_content').load('./pages/category.html');
                break;
            case '资讯管理':
                // 加载页面
                $('.ad_content').load('./pages/info.html');
                break;
            case '用户管理':
                // 加载页面
                $('.ad_content').load('./pages/user.html');
                break;
            default:
                break;
        }
        $('.breadcrumb li.active').text(title);
    });
});


/*2.左菜单的显示和隐藏*/
$('.glyphicon-align-justify').on('click', function() {
    $('.ad_aside').toggle();
    $('.ad_section').toggleClass('menu');
});

/*3.退出功能*/
$('.glyphicon-log-out').on('click', function() {
    /*1.准备模态框*/
    var logoutModal =`
        <div class="modal fade" id="logoutModal">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                         <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                         <h4 class="modal-title">温馨提示</h4>
                    </div>
                    <div class="modal-body">
                         <p class="text-danger"><span class="glyphicon glyphicon-info-sign"></span> 您确定要退出看点资讯管理系统吗？</p>
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                         <button type="button" class="btn btn-primary">确定</button>
                    </div>
                </div>
            </div>
        </div>`;
    /*2.把模态框追加到页面当中*/
    $('body').append(logoutModal);
    /*3.显示模态框*/
    $('#logoutModal').modal('show');
    /*4.当点击确定按钮的时候进行对出*/
    /*5.防止多次绑定  在绑定之前先注销上一次的绑定*/
    $('#logoutModal').off('click', '.btn-primary').on('click', '.btn-primary', function() {});
});
















