// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是默认的标题',
      observer:function(newVal,oldVal){
        console.log(newVal, oldVal)
      }
    },
    content: String
  },
  externalClasses: ['titleclass'],
  pageLifetimes:{
    show() {
      console.log('组件在页面中显示')
    },
    hide() {
      console.log('组件在页面中隐藏')
    }
  },
})
