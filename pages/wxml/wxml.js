// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcome: '您好 小程序',
    age:31,
    nowTime: new Date().toLocaleString(),
    isActive: true,
     好:[
      ['大话西游','西游记'],
      ['水浒传','鲁智深'],
      ['honey','和你']
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      setInterval((event) =>{
          this.setData({
            nowTime: new Date().toLocaleString()
          })
      },1000)
  },
  tabcolor(){
    this.setData({
      isActive : !this.data.isActive
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})