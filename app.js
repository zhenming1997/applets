App({
  onLaunch: function () {
      console.log('小程序初始化完成：onLaunch')
      // 异步调用
      wx.getUserInfo({
        success: function(res){
            console.log(res)
        }
      })
      //
      setTimeout(function(){
        const err = new Error()
        throw err
      },3000)
  },
  onShow: function (options) {
    console.log('界面显示出来：onShow')

  },
  onHide: function () {
    console.log('界面被隐藏时：onHide')

  },
  onError: function (msg) {
    console.log('小程序发生错误时：onError')

  }
})
