// pages/profiles/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleFocus(event){
    console.log('进入焦点:', event);
  },

  handleInput(event){
    console.log('输入内容:', event);
  },

  handleBlur(event){
    console.log('移开焦点:', event);
  },

  handleScroll(event){
    console.log("正在滚动：", event);
  }
})