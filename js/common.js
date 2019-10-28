/*
 * @Author: seven.zhang 
 * @Date: 2018-05-18 14:22:14 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2019-10-28 16:51:28
 */
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
})

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
    return unescape(r[2]);
    }
    return null;
}

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
// 获取用户位置信息
// function Mlocation(ip='101.231.183.227') {
//     $.ajax({
//         type: "post",
//         url: "https://bird.ioliu.cn/ip",
//         dataType: "json",
//         data:{
//             ip:ip?ip:''
//         },
//         success:function (data) {
//             console.log(data)
//         },
//         error:function () {
//             console.log("error!");
//         }
//     })
// }
// Mlocation()
// https://api.asilu.com/weather_v2/ 
// 根据ip所在城市 请求天气
$.get('https://www.tianqiapi.com/api/?version=v1&cityid='+ipCityId,function(res){
    console.log(res)
    // $('#weather').html(ipCityName + '：' + res.data[0].wea)
})



