// pages/home/home.js
// 获取App实例对象产生的对象结果
const app = getApp()
console.log(app.globalData)
// 1.获取用户信息
Page({
  getUserInfo(event){
    console.log(event)
  }
})