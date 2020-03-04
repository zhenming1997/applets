// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleIncrement(event){
  console.log(event)
   this.setData({
     num:this.data.num+1
   })
  },
  //tab 参数
  tabClick(event){
    console.log(event.detail.title)
  },
  //修改组件内的data
  handleIncrementCpn(){
    //通过ID或class拿到组件对象
    const my_sel = this.selectComponent('#sel-id')
    // console.log(my_sel)
    //调用方法接口修改数据
    my_sel.incrementCount(10);
  }
})