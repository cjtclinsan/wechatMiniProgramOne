// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 123,
    firstName: 'kobe',
    lastName: 'bryant',
    nowTime: new Date().toLocaleString(),
    isActive: true,
    isShow: true,
    show: '隐藏',
    score: 70,
    movies: [
      '大话西游','泰坦尼克','罗密欧'
    ],
    nums: [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    letters: [
      'a','b','c'
    ]
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime :new Date().toLocaleString()
      })
    }, 1000)
  },

  handleSwitchColor(){
    console.log(this.data.isActive)
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement(){
    this.setData({
      score: this.data.score+5
    })
  }
})