Page({

  /**
   * 页面的初始数据
   */
  data: {
    result1:"",
    result2:"",
    result3:""
  },

  goToPrevious: function(param){
    wx.redirectTo({
      url: '/pages/createARoom/createARoom'
    })
  },
  
  goToNext: function(param){
    wx.redirectTo({
      url: '/pages/four/two10/singleplayer2?r1='+this.data.result1+"&r2="+this.data.result2+"&r3="+this.data.result3
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      result1: options.r1,
      result2: options.r2,
      result3: options.r3
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