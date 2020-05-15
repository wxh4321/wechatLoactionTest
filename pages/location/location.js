const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {locationData} = options;
    const {latitude,longitude,name} = JSON.parse(locationData);
    console.log(latitude,longitude,name);
    wx.openLocation({
      latitude:Number(latitude),
      longitude:Number(longitude),
      name,
      scale: 10 // 缩放比例，范围5~18
      })
   
  }
})