/*
 * @Author: seven.zhang 
 * @Date: 2018-05-18 14:22:14 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2019-07-12 14:34:53
 */

// 页面滚动事件
// let toTop=0,toTopAfter=0;
// $(window).scroll(()=>{
//     toTop = $(window).scrollTop();
//     if(toTop>300){
//         if(toTop<=toTopAfter){//上滚
//             console.log('上滚')
//             // $('#nav-top').slideDown();
//             $('#nav-top').css("top","0");
//         }else{//下滚
//             console.log('下滚')
//             // $('#nav-top').slideUp();
//             $('#nav-top').removeClass('nav-top-show');
//             $('#nav-top').css("top","-100%");
//         }
//     }
//     setTimeout(() => {
//         toTopAfter=toTop;
//     }, 0);
// });

// 尾部显示公众号二维码
$('#gzh').mouseover(function(){
    $(".gzh_ewm").fadeIn(100);
});
$('#gzh').mouseleave(function(){
    $(".gzh_ewm").fadeOut(100);
});

// 天气设置
const ipCityName = returnCitySN["cname"]
const ipCityId = returnCitySN["cid"]
// 根据ip所在城市 请求天气
$.get('https://www.tianqiapi.com/api/?version=v1&cityid='+ipCityId,function(res){
    console.log(res)
    // $('#weather').html(ipCityName + '：' + res.data[0].wea)
})

