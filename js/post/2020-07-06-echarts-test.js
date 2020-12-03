// 基于chartsCommon.js
var myChart = echarts.init(document.getElementById('book-chart'));
var baseData = bookData['2020']
let opt = getReadSummaryChartOpt(baseData,{title:'2020年度读书统计'})
myChart.setOption(opt);