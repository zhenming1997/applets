// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    //模拟服务器返回的数据
    const data = [{ name: '甄铭', age: 18 }, {name: '李文涛', age: 23 }]
    //初始化数据
    this.setData({
      list:data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },
  /**
   * 监听页面滚动
   */
  onPageScroll: function(sec){
      console.log(sec)
  },
  /**
   * 监听上拉到底部
   */
  onReachBottom(){
      console.log('已经没有更多内容了')
  },
  /**
   * 监听下拉
   */
  onPullDownRefresh(){
    console.log('下拉动作')
  }
  /**
   * 3. 监听wxml中发生的事件
   */
})