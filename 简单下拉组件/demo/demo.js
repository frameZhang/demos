$(function (){
    //class
    var js_booking_wrap = $('.js-booking-select');
    open_select(js_booking_wrap);
})

/*
 * 绑定下拉框选项组件
 * js_select:选择框的对象，最外层div对象
 */
function open_select(js_select){//绑定事件
    var selector, js_select_li;

    js_select.on("click", function(e){//打开下来
        js_select.find("ul").removeClass("open");//清空其他的open

        selector= $(this).find("ul");
        js_select_li = selector.find("li");
        selector.toggleClass("open");
        e.stopPropagation();//阻止冒泡事件
    });

    js_select.on("click","li",function(event){//选中之后填充input框
        var _this = $(this);
        var js_select_input = _this.closest(".js-booking-select").find(".nav-input");//选中值
        js_select_input.val(_this.attr('data-value'));//将p的值设置为选中的值
        selector.removeClass("open");
        event.stopPropagation();
    });

    clear_select(js_select);
}

/*
 * 关闭下拉框选项
 * select_obj:下拉数值ul对象
 */
function clear_select(select_obj){
    var select = select_obj.find("ul");
    $(document).on('click',function() {//点击其他地方的时候，删除open样式
        select.removeClass('open');
    });
};