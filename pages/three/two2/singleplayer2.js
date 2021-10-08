// pages/singleplayer2/singleplayer2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    result:""
  },

  goToPrevious: function(){
    wx.redirectTo({
      url: '/pages/choose/choose',
    })
  },

  // 功能实现函数
  getResult: function() {
    this.setData({
      a: Math.ceil(Math.random()*6),
      b: Math.ceil(Math.random()*6),
      c: Math.ceil(Math.random()*6),
      d: Math.ceil(Math.random()*6),
      e: Math.ceil(Math.random()*6),
      f: Math.ceil(Math.random()*6)
    })
    // 等级划分
    var level = {
      zero: '很遗憾您没有中奖',
      one: '恭喜您获得了状元插金花',
      two: '恭喜您获得了六杯红', 
      three: '恭喜您获得了五子', 
      four: '恭喜您获得了普通状元',
      five: '恭喜您获得了对堂',
      six: '恭喜您获得了三红',
      seven: '恭喜您获得了四进',
      eight: '恭喜您获得了二举',
      nine: '恭喜您获得了一秀',
      ten:'恭喜您获得了五皇'
    },
    this_level; // 存储当前等级
   
    //  存储当前随机数组
    var NumberArr = [0,0,0,0,0,0];
   
    // 数据进入数组，排序
    NumberArr.push(this.data.a,this.data.b,this.data.c, this.data.d, this.data.e,this.data.f);
    NumberArr.sort();
   
    //存储当前 “四” 的个数
    var isfour = 0;
   
    for (var i = 0; i < NumberArr.length; i++) {
      if (NumberArr[i] == 4) {
        isfour = isfour + 1;
      }
    }
   
    // 判断 “四” 的个数属于哪一等级;
    switch (isfour) {
      case 1:
        for (var i = 0; i < NumberArr.length; i++) {
          //存储当前相同的数量，判断是否为四进
          var ContrastArr = [];
          for (var j = 0; j < NumberArr.length; j++) {
                if (NumberArr[i] == NumberArr[j]) {
                  ContrastArr.push(NumberArr[j]);
                }
          }
        }
        // 等到上面遍历执行完再进行判断属于哪个级别
        if (ContrastArr.length === 4) {
          this_level = level.seven; //四进
          break;
        } else if (ContrastArr.length === 5) {
          this_level = level.three; //五子
          break;
        } else {
          // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
          var isContinuityArray = false;
          var array = NumberArr;
          var arrayCount = array.length;
          for (var i = 0; i < arrayCount; i++) {
            var currentArr = Number(array[i]) + 1;
            var nestArr = Number(array[i + 1]);
            if (i + 1 == arrayCount) {
              currentArr = Number(array[i]);
              nestArr = Number(array[i]);
            }
            if (currentArr != nestArr) {
              isContinuityArray = false;
              break;
            } else {
              isContinuityArray = true;
            }
          }
          if (isContinuityArray) {
            this_level = level.five;
            break;
          } else {
            this_level = level.nine;
            break;
          }
        };
        break;
      case 2:
        for (var i = 0; i < NumberArr.length; i++) {
          var ContrastArr = [];
          for (var j = 0; j < NumberArr.length; j++) {
            if (NumberArr[i] == NumberArr[j]) {
              ContrastArr.push(NumberArr[j]);
            }
          }
          // 判断是 四进 or 二举
          if (ContrastArr.length === 4) {
            this_level = level.seven;
            break;
          } else {
            this_level = level.eight;
          }
        };
        break;
      case 3:
        this_level = level.six;
        break;
      case 4:
      // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
        var one = 0;
        for (var i = 0; i < NumberArr.length; i++) {
          if (NumberArr[i] === 1) {
            one = one + 1;
          }
        }
        if (one == 2) {
          this_level = level.one; // 插金花
        } else {
          this_level = level.four; //普通状元
        }
        break;
      case 5:
        this_level = level.ten; // 五皇
        break;
      case 6:
        this_level = level.two; //六杯红
        break;
      default:
        // 就是页面都没有四,来判断是否属于 “五子” 和 “六杯黑” 和 “四进” 中的哪一种;
        for (var i = 0; i < NumberArr.length; i++) {
          var ContrastArr = [];
          for (var j = 0; j < NumberArr.length; j++) {
            if (NumberArr[i] == NumberArr[j]) {
              ContrastArr.push(NumberArr[j]);
            }
          }
          if (ContrastArr.length === 4) {
            this_level = level.seven; //四进
            break;
          } else if (ContrastArr.length === 5) {
            this_level = level.three; //五子
            break;
          } else {
            this_level = level.zero;
          }
        };
        break;
    }

    this.setData({
      result: this_level
    })

    wx.redirectTo({
      url: '/pages/three/two3/singleplayer3?aa='+this.data.a+"&bb="+this.data.b+"&cc="+this.data.c+"&dd="+this.data.d+"&ee="+this.data.e+"&ff="+this.data.f+"&r1="+this.data.result
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