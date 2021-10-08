// pages/music/music.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isplay: false
  },

   // 控制背景音乐
   ctrlMusic: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.title = "爱拼才会赢"
    backgroundAudioManager.src = "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_564059&response=res&type=convert_url&";
    // 播放
    if (!this.data.isplay) {
      this.setData({
        isplay: !this.data.isplay,
      });
      console.log("music playing !");
      // 结束时循环
      backgroundAudioManager.onEnded(() => {
        console.log("music end !");
        this.setData({
          isplay: !this.data.isplay,
        });
        console.log("music replay !");
        this.ctrlMusic();
      });
    }

    // 暂停
    else {
      this.setData({
        isplay: !this.data.isplay,
      });
      backgroundAudioManager.pause();
      backgroundAudioManager.onPause(() => {
        console.log("music stop !");
      });
    }
  },

  goToPrevious: function(param){
    wx.redirectTo({
      url: '/pages/choose/choose',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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