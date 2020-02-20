// pages/image/image.js
Page({
  data:{
    picter: null
  },
  addPic(){
    //打开相册API
    wx.chooseImage({
      //箭头函数可向上取值 避免this位undifand
      success: (res)=> {
          console.log(res)
        //设置图片地址
       this.setData({
         picter: res.tempFilePaths[0]
       })
      },
    })
  },
  //图片加载成功执行
  picload(){
    console.log('图片加载完成！')
  }
})