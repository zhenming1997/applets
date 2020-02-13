Page({
  data: {
    name: 'Hello Coderwhy',
    age:18,
    count:0,
    movies: [
      { id:1, name: '美国队长', year: 2018 },
      { id:2, name: '钢铁侠', year: 1997 },
      { id:3, name: '蜘蛛侠', year: 2019 }
    ]
  },
  addcountClick(){
    this.setData({
      count: this.data.count+1
    })
  },
  delcountClick() {
    this.setData({
      count: this.data.count-1
    })
  }
})