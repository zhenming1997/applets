App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户信息,并将用户信息传递给服务器(接口已经废弃)
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //打开场景
    console.log(options.scene)
    switch (options.scene){
        case 1001:
        console.log("1001：发现栏小程序主入口进入")
        break;
        case 1005:
          console.log("1005：通过微信首页搜索框进入")
        break;
        case 1011:
        console.log("1011：通过扫描小程序二维码进入")
        break;
        case 1089:
        console.log("1089：首页下拉发现小程序中最近使用进入")
        break;


    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 全局变量
  globalData:{
    name: '小明',
    age:18
  }
})
