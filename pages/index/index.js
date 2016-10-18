//index.js
//获取应用实例
var util = require("../../utils/util.js");
var app = getApp();
var opt = {
  page:1
};
Page({
  data: {
    news:{},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(opt){
    var _this = this;
    util.getNewsList(1,function(body){
       _this.setData({
         news:body.pagebean
       });
       console.log("this",_this.news);
       wx.setStorage({
          key:"newsDetail",
          data:{
            news:_this.data.news.contentlist
          }
       });
    });
  },
  gotoNews:function(event){
    wx.setStorageSync("index",event.currentTarget.dataset.key);
    wx.navigateTo({
      url: '../logs/logs?key='+event.currentTarget.dataset.key
    });
  }
})
