// pages/singleplayer3/singleplayer3.js
Page({

  /**
   */
  data: {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    result: ""
  },

  goToPrevious: function(param){
    wx.redirectTo({
      url: '/pages/createARoom/createARoom',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      a: options.aa,
      b: options.bb,
      c: options.cc,
      d: options.dd,
      e: options.ee,
      f: options.ff,
      result: options.r1,
    })
  },

  goToNext: function(param){
    wx.redirectTo({
      url: '/pages/three/two3.5/singleplayer?r1='+this.data.result
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})