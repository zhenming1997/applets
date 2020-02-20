// pages/input/input.js
Page({
  input(envent){
    console.log("用户正在输入:",envent)
  },
  blur(envent){
    console.log("input失去焦点",envent)
  },
  focus(envent){
    console.log("input获取焦点",envent)
  },
  confirm(envent){
    console.log("用户点击完成了",envent)
  }
})