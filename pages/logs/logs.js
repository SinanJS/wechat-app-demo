//logs.js
var app = getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    news:{}
  },
  onLoad: function () {
     var index = +wx.getStorageSync('index');
     var newsList = wx.getStorageSync("newsDetail").news;
     var content = newsList[index];
     console.log("cccc",content);
     var alist = content.allList;
     
     this.setData({
       news:content
     });
  }
});
