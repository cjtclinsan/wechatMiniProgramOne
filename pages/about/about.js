// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iamgePath :''
  },

  handleChoosePhoto(){
    //api
    wx.chooseImage({
      success: (res) => {
        //取出路径
        const imgPath = res.tempFilePaths[0]
        this.setData({
          iamgePath: imgPath
        })
      },
    })
  },

  handleBindLoad(){
    console.log('图片加载完成')
  }
})