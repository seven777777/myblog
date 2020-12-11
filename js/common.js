/*
 * @Author: seven.zhang 
 * @Date: 2018-05-18 14:22:14 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2020-12-11 15:09:46
 */
$('.timeago').timeago().show()

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function queryString() {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = pair[1];
      // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]], pair[1] ];
          query_string[pair[0]] = arr;
      // If third or later entry with this name
      } else {
          query_string[pair[0]].push(pair[1]);
      }
    }
      return query_string;
}


// 列表页处理
function setPostList(){
    var query = queryString();

    if (query.tag !== undefined) {
        var tag = decodeURI(query.tag);
        var tagClassName = tag.replace(new RegExp('\\.', 'g'), '\\.');
        $('#tagname').parent().show()
        $('#tagname').text(tag);
        // $('h1').hide();
        $('.postlist-block').not('.tag-' + tagClassName).hide();
    }else{
        $('#tagname').parent().hide()
    }
}
setPostList()

// img点击事件
$('p img').on('click',function(e){
    let url = e.currentTarget.getAttribute('src')
    window.open(url)
})

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

// 天气设置
// const ipCityName = returnCitySN["cname"]
// const ipCityId = returnCitySN["cid"]
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
// $.get('https://www.tianqiapi.com/api/?version=v1&cityid='+ipCityId,function(res){
//     console.log(res)
//     // $('#weather').html(ipCityName + '：' + res.data[0].wea)
// })

// 第一个参数是appid，第二个参数是appkey，此处的只是示例
// AV.initialize("x2aiB0AAQ3mQuVwR0ySsjK7w-gzGzoHsz", "6CkpBMT9ri2EG58jouChnPeB");
// // 自己创建的Class的名字
// var name='Counter';
// function createRecord(Counter){
//   // 设置 ACL
//   var acl = new AV.ACL();
//   acl.setPublicReadAccess(true);
//   acl.setPublicWriteAccess(true);
//   // 获得span的所有元素
//   var elements=document.getElementsByClassName('leancloud_visitors');
//   // 一次创建多条记录
//   var allcounter=[];
//   for (var i = 0; i < elements.length ; i++) {
//     // 若某span的内容不包括 '-' ，则不必创建记录
//     if(elements[i].textContent.indexOf('-') == -1){
//       continue;
//     }
//     var title = elements[i].getAttribute('data-flag-title');
//     var url = elements[i].id;
//     var newcounter = new Counter();
//     newcounter.setACL(acl);
//     newcounter.set("title", title);
//     newcounter.set("url", url);
//     newcounter.set("time", 0);
//     allcounter.push(newcounter);
//     // 顺便更新显示span为默认值0
//     elements[i].textContent=0;
//   }
//   AV.Object.saveAll(allcounter).then(function (todo) {
//     // 成功保存记录之后
//     console.log('创建记录成功！');
//   }, function (error) {
//     // 异常错误 
//     console.error('创建记录失败: ' + error.message);
//   });
// }
// function showCount(Counter){
//   // 是否需要创建新纪录的标志（添加一篇新文章）
//   var flag=false;
//   var query = new AV.Query(name);
//   query.greaterThanOrEqualTo('time', 0);
//   query.find().then(function (results) {
//     // 当获取到的记录为0时置默认值
//     if(results.length==0){
//       $('.leancloud_visitors').text('-');
//       flag=true;
//       console.log('返回查询记录为空');
//       // 如果获取到空记录就创建新记录
//       createRecord(Counter);
//       return;
//     }
//     // 将获取到的数据设置为text
//     for (var i = 0; i < results.length; i++) {
//       var item = results[i];
//       var url = item.get('url');
//       var time = item.get('time');
//       var element = document.getElementById(url);
//       element.textContent = time;
//     }
//     // 当某个span含有默认值时说明需要创建记录
//     if($('.leancloud_visitors').text().indexOf("-") != -1){
//       flag=true;
//     }
//     // 当获取的记录数与span个数不吻合时
//     if(results.length != $('.leancloud_visitors').length){
//       flag=true;
//     }
//     if(flag){
//       createRecord(Counter);
//     }
//   }, function (error) {
//     console.log('query error:'+error.message);
//   });
// }
// $(function() {
//   var Counter = AV.Object.extend(name);
//   showCount(Counter);
// });



