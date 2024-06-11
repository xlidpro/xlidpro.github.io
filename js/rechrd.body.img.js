document.addEventListener("DOMContentLoaded", function(){
    var buttonElement = document.getElementById("show_img_button"); // 获取按钮元素
    buttonElement.addEventListener("click", function() {
        //console.log('按钮点击');
        alert("拒绝访问！");
        buttonElement.remove(); // 删除按钮
    });
});
