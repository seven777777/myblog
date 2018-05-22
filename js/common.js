/*
 * @Author: seven.zhang 
 * @Date: 2018-05-18 14:22:14 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-22 10:40:51
 */

// 页面滚动事件
let toTop=0,toTopAfter=0;
$(window).scroll(()=>{
    toTop = $(window).scrollTop();
    if(toTop==0){
        $('#nav-top').removeClass('nav-top-show');
    }else{
        $('#nav-top').addClass('nav-top-show');
        if(toTop>300){
            if(toTop<=toTopAfter){//上滚
                console.log('上滚')
                // $('#nav-top').slideDown();
                $('#nav-top').css("top","0");
            }else{//下滚
                console.log('下滚')
                // $('#nav-top').slideUp();
                $('#nav-top').css("top","-100%");
            }
        }
    }
    setTimeout(() => {
        toTopAfter=toTop;
    }, 0);
});

// 尾部显示公众号二维码
$('#gzh').mouseover(function(){
    $(".gzh_ewm").fadeIn(300);
});
$('#gzh').mouseleave(function(){
    $(".gzh_ewm").fadeOut(300);
});