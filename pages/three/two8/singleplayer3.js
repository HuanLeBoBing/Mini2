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
    key1:0,
    key2:0,
    key3:0,
    result1:"",
    result2:"",
    result3:"",
    res:0
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
      result1: options.r1,
      result2: options.r2,
      result3: options.r3
    })
  },
  
  goToNext: function(param){

    var Mymap1 = new Map([['很遗憾您没有中奖',0],['恭喜您获得了状元插金花',1000],['恭喜您获得了六杯红',500],['恭喜您获得了五子',500],['恭喜您获得了普通状元',500],['恭喜您获得了对堂',300],['恭喜您获得了三红',200],['恭喜您获得了四进',100],['恭喜您获得了二举',50],['恭喜您获得了一秀',10],['恭喜您获得了五皇',500]]);

    this.data.key1=Mymap1.get(this.data.result1);
    this.data.key2=Mymap1.get(this.data.result2);
    this.data.key3=Mymap1.get(this.data.result3);
    console.log(this.data.key1+" "+this.data.key2+" "+this.data.key3);

    if(this.data.key1>this.data.key2){
      if(this.data.key1>this.data.key3){
        if(this.data.key2>this.data.key3){
          this.setData({
            res:1//123
          })
        }
        else if(this.data.key2<this.data.key3){
          this.setData({
            res:2//132
          })
        }
        else{
          this.setData({
            res:8//1最大,23相等
          })
        }
      }
      else if(this.data.key3>this.data.key1){
        this.setData({
          res:5//312
        })
      }
      else{
        this.setData({
          res:9//13相等,2最小
        })
      }
    }
    else if(this.data.key2>this.data.key1){
      if(this.data.key2>this.data.key3){
        if(this.data.key1>this.data.key3){
          this.setData({
            res:3//213
          })
        }
        else if(this.data.key1<this.data.key3){
          this.setData({
            res:4//231
          })
        }
        else{
          this.setData({
            res:10//2最大,13相等
          })
        }
      }
      else if(this.data.key3>this.data.key2){
        this.setData({
          res:6//321
        })
      }
      else{
        this.setData({
          res:11//23相等,1最小
        })
      }
    }
    else if(this.data.key1==this.data.key2&&this.data.key1==this.data.key3){
      this.setData({
        res:7//123相等
      })
    }
    else{
      if(this.data.key1==this.data.key2&&this.data.key1>this.data.key3){
        this.setData({
          res:12//12相等,3最小
        })
      }
      if(this.data.key1==this.data.key2&&this.data.key1<this.data.key3){
        this.setData({
          res:13//12相等,3最大
        })
      }
    }

    wx.redirectTo({
      url: '/pages/three/result/singleplayer?r1='+this.data.result1+"&r2="+this.data.result2+"&r3="+this.data.result3+"&res="+this.data.res
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