// pages/test/test.js
import config from "../../utils/config";
import request from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsList:[],    //商品数据
    photoold:"",
    photonew:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function(options) {
    // this.gettest();
    let itemsListData = await request("/itemList");
    // console.log(itemsListData);
    this.setData({
      itemsList:itemsListData
    })
    // console.log(itemsList);
  },

  chooseImage :function(e){
    var that = this;
    wx.chooseImage({
      // 最多上传几张图片
      count:1,
      sizeType:'compressed',
      success(res){
        that.setData({
          photoold:res.tempFilePaths[0]
        })
        console.log(res.tempFilePaths[0]);
      }
    })
  },

  // todo 完善新建商品的代码，然后进行尝试。

  uploadImage :function(e){
    var that =this;
    // console.log("openid:",that.data.myopenid);
    console.log("filePath:",that.data.photoold);
    wx.uploadFile({
      filePath: that.data.photoold,
      // 参数名和接口一致
      name: 'picfile',
      url: config.host+'/uploadImg',
      formData:{
        // 其他参数
        'myopenid': that.data.myopenid,
        'itemname': "test"
      }, 
      success(res){
       console.log(res.data)
       that.setData({
        photonew:res.data+"?temp="+new Date().getTime()
       })
        wx.showToast({
          title: '图片上传成功',
          icon: 'success',
          duration: 2000
        })
      },fail(res){
        console.log(res)
        wx.showToast({
          title: '图片上传失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
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