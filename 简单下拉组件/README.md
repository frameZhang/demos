## 简单的下拉组件

这个下拉组件的原理很简单，html结构就是一个显示的内容层，一个下拉显示层。

显示的内容层主要是由input框和下拉按钮组成；下拉显示层主要是由ul来构成的。

他们之间主要是用disable的属性特点，配合JQ的一些方法来实现的，具体的实现，可以看详细的代码。

**主要html代码**

        <div class="nav-down booking">
        
            <div class="nav-select bf-select js-booking-select">
                <!-- 默认值的显示 -->
                <input class="nav-input bf-input" placeholder="往返" autocomplete="off" type="text"/>
                <!-- 这里是雪碧图的背景，下拉 -->
                <i class="bg-drop_down_box float-left"></i>
                <!-- 下拉选项 -->
                <ul class="information-select">
                    <li data-value="往返">往返</li>
                    <li data-value="单程">单程</li>
                </ul>
            </div>
        <div>
        
**主要js代码**

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
        
这里调用的时候，只需要穿入一个js_select的对象即可。

**js调用代码**

        $(function (){
            //class
            var js_booking_wrap = $('.js-booking-select');
            open_select(js_booking_wrap);
        })

如有错误，请指出；如有疑问，欢迎[留言](https://github.com/frameZhang/demos/issues)。
