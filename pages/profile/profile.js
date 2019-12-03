// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    titles:[
      "衣服","鞋子","裤子"
    ]
  },

  handleBthClick(){
    console.log('按钮点击');
  },

  handleTouchMove(){
    console.log('handleTouchMove');
  },

  handleTouchStart(){
    console.log('handleTouchStart');
  },

  handleTouchEnd(){
    console.log('handleTouchEnd');
  },

  handleTap(){
    console.log('handleTap');
  },

  handleLongPress(){
    console.log('handleLongPress');
  },

  handleEventClick(e){
    console.log('-------------', e);
  },

  handleItemClick(event){
    console.log(event.currentTarget.dataset.item);
  },

  //------事件冒泡   事件捕获--------
  handleCaptureView1(){
    console.log("冒泡1");
  },
  handleCaptureView2() {
    console.log("冒泡2");
  },
  handleCaptureView3() {
    console.log("冒泡3");
  },

  handleBindView1() {
    console.log("捕获1");
  },
  handleBindView2() {
    console.log("捕获2");
  },
  handleBindView3() {
    console.log("捕获3");
  },
})