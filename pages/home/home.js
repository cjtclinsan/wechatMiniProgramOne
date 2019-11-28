// pages/home/home.js
//获取A怕产生的示例对象
const app = getApp()

const name = app.globalData.name;
const age = app.globalData.age;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'zhangsan',
    age: 12,
    students: [
      {id: '01', name:'kobe', age:30},
      {id: '02', name:'james', age:25},
      {id: '03', name:'yaoming', age: 35}
    ],
    counter:0
  },

  handleBtnAdd() {
    //this.data.counter += 1
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleBtnSub() {
    //this.data.counter += 1
    if( this.data.counter > 0 ){
      this.setData({
        counter: this.data.counter - 1
      })
    }
  },
  handleGetUserInfo(event){
    //console.log(event)
  }
})

//编程范式：
//1.命令式编程
//2.声明式编程   Vue/React/Angluar