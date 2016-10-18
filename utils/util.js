function getNewsList(page,cb){
  wx.request({
    url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
    header:{
      "apikey":"d27a18075a09c98a6c82000839922c24"
    },
    method:"get",
    data:{
      page:page,
      needContent:1
    },
    success:function(result){
      if(result.data.showapi_res_body){
        cb(result.data.showapi_res_body);
      }
    }
  });
}

module.exports = {
  getNewsList: getNewsList
}
