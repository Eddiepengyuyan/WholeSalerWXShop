import config from "./config.js"
export default( url,data={},method="POST") => {
  return new Promise((resolve,rejects) =>{
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        'cookid':wx.getStorageSync('cookie')?wx.getStorageSync('cookie').find(item=>item.indexof("MUSIC_U")!= -1):"",
        'content-type': 'application/json' 
      },
      success(res){
        resolve(res.data)
      },
      fail(err){
        rejects(err)
      }
    })
  })
}
