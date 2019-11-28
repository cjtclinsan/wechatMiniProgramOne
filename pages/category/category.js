// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'哈哈',
    resultList:[]
  },

  handleBtnClick(){
    this.setData({
      message:'呵呵'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    wx.request({
      url: 'http://localhost:18089/course/listCourse?pageNum=1&findType=0&pageSize=20',
      // 箭头函数中的this一层层往上找
      success:(res) => {
        const data = res.data.content.result;
        this.setData({
          resultList: data
        })
      }
    })
  },

  handleClick(courseId){
    console.log(courseId);
  },

  //-----------监听其他事件------------
  onPageScroll(obj){
    //console.log(obj.scrollTop)
  },

  //---------监听页面是否滚到底部------------
  onReachBottom() {
    console.log('页面到底')
  },

  //--------监听下拉---------
  onPullDownRefresh() {
    console.log('下拉刷新')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})