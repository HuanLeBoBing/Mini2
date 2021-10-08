Page({

  /**
   * 页面的初始数据
   */
  data: {
    result1:"",
    result2:"",
    result3:"",
    res:0,
    msg1:"第1名：1号玩家\n第2名：2号玩家\n第3名：3号玩家",
    msg2:"第1名：1号玩家\n第2名：3号玩家\n第3名：2号玩家",
    msg3:"第1名：2号玩家\n第2名：1号玩家\n第3名：3号玩家",
    msg4:"第1名：2号玩家\n第2名：3号玩家\n第3名：1号玩家",
    msg5:"第1名：3号玩家\n第2名：1号玩家\n第3名：2号玩家",
    msg6:"第1名：3号玩家\n第2名：2号玩家\n第3名：1号玩家",
    msg8:"第1名：1号玩家\n第2名：2号玩家 3号玩家",
    msg9:"第1名：1号玩家 3号玩家\n第3名：2号玩家",
    msg10:"第1名：2号玩家\n第2名：1号玩家 3号玩家",
    msg11:"第1名：2号玩家 3号玩家\n第3名：1号玩家",
    msg12:"第1名：1号玩家 2号玩家\n第3名：3号玩家",
    msg13:"第1名：3号玩家\n第2名：1号玩家 2号玩家"
  },

  goToPrevious: function(param){
    wx.redirectTo({
      url: '/pages/choose/choose'
    })
  },
  
  goToNext: function(param){
    wx.redirectTo({
      url: '/pages/three/three'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      result1:options.r1,
      result2:options.r2,
      result3:options.r3,
      res:options.res
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