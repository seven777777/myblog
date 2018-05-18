/*
 * @Author: seven.zhang 
 * @Date: 2018-05-18 14:22:14 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-18 17:35:52
 */

// 页面滚动事件
// let toTop = $(window).scrollTop();
let toTop=0,toTopAfter=0;
// let scrollFunc = (e) => {  
//     e = e || window.event;  
//     if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件               
//         if (e.wheelDelta > 0) { //当滑轮向上滚动时  
//             $('#nav-top').slideDown()
//         }  
//         if (e.wheelDelta < 0) { //当滑轮向下滚动时  
//             console.log("滑轮向下滚动");  
//         }  
//     } else if (e.detail) {  //Firefox滑轮事件  
//         if (e.detail> 0) { //当滑轮向上滚动时  
//             $('#nav-top').slideDown()
//         }  
//         if (e.detail< 0) { //当滑轮向下滚动时  
//             console.log("滑轮向下滚动");  
//         }  
//     }  
// }
// //给页面绑定滑轮滚动事件  
// if (document.addEventListener) {//firefox  
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);  
// }  
// //滚动滑轮触发scrollFunc方法  //ie 谷歌  
// window.onmousewheel = document.onmousewheel = scrollFunc;

$(window).scroll(()=>{
    let toTop = $(window).scrollTop();
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