// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      titles:{
        type: Array,
        value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bool:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      // console.log(event)
      const index = event.currentTarget.dataset.index
      const title = event.currentTarget.dataset.title
      this.setData({
        bool:index
      }),
      // 通知页面内部点击事件  ES6直接输入const的变量名称
      this.triggerEvent('itemClick', {index,title},{})
    }
  }
})
