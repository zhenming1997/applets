-// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','裤子','鞋子']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  inp(){
    console.log('事件监听')
  },
  handleTouchStart(e){
    console.log('触摸时触发:',e)
  },
  handleTouchMove(e) {
    console.log('按住移动时触发：',e)
  },
  handleTouchend(e) {
    console.log('离开时触发:',e)
  }, 
  handleTap(e) {
    console.log('按住迅速抬起（点击）触发：',e)
  },
  handleLongpress(e) {
    console.log('长按时触发：',e)
  },
  handletapEventClick(event){
    console.log(event)
  },
  handleTaps(e){
    console.log(e)
    const index = e.currentTarget.dataset.index
    const name = e.currentTarget.dataset.item
    console.log(index + '--' + name)
  }
})