// pages/test/test.js
import request from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsList:[]    //商品数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function(options) {
    // this.gettest();
    let itemsListData = await request("/itemList");
    console.log(itemsListData);
    this.setData({
      itemsList:itemsListData
    })
    // console.log(itemsList);
  },

  // gettest(){
  //   wx.request({
  //     url: 'http://localhost:8080/itemList',
  //     method:'POST',
  //     success(res){
  //       console.log(res);
  //     },
  //     fail(err){
  //       console.log(err);
  //     }
  //   })
  // },

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
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})