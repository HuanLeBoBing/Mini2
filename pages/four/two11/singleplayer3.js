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
    result1:"",
    result2:"",
    result3:"",
    result4:"",
    key1:0,
    key2:0,
    key3:0,
    key4:0,
    res:""
  },

  sortNum:function(a,b){
    return b-a
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
      result3: options.r3,
      result4: options.r4,
    })
  },
  
  goToNext: function(param){

    var Mymap1 = new Map([['很遗憾您没有中奖',0],['恭喜您获得了状元插金花',1000],['恭喜您获得了六杯红',500],['恭喜您获得了五子',500],['恭喜您获得了普通状元',500],['恭喜您获得了对堂',300],['恭喜您获得了三红',200],['恭喜您获得了四进',100],['恭喜您获得了二举',50],['恭喜您获得了一秀',10],['恭喜您获得了五皇',500]]);

    this.data.key1=Mymap1.get(this.data.result1);
    this.data.key2=Mymap1.get(this.data.result2);
    this.data.key3=Mymap1.get(this.data.result3);
    this.data.key4=Mymap1.get(this.data.result4);
    console.log(this.data.key1+" "+this.data.key2+" "+this.data.key3+" "+this.data.key4);
    var array=new Array(this.data.key1,this.data.key2,this.data.key3,this.data.key4);
    var temp=new Array("1号玩家","2号玩家","3号玩家","4号玩家");
		for(var i=0;i<array.length;i++) {
			for(var j=i+1;j<array.length;j++) {
				if(array[i]==array[j]) {
					temp[i]=temp[i]+" "+temp[j];
					temp[j]="";
					array[j]=-1;
				}
			}
		}
    var map1 = new Map([[array[0],temp[0]],[array[1],temp[1]],[array[2],temp[2]],[array[3],temp[3]]])
    array.sort(this.sortNum);
    var counter=1;
    var r="";
		for(var i = 0; i < array.length; i++) {
      if(counter<=4){
        r=r+"第"+counter+"名: "+map1.get(array[i])+"\n";
        if(map1.get(array[i]).length==4){
          counter++;
        }
        if(map1.get(array[i]).length==9){
          counter=counter+2; 
        }
        if(map1.get(array[i]).length==14){
          counter=counter+3;
        }
      }
      else{
        break;
      }
    }
    this.setData({
      res:r
    })
    wx.redirectTo({
      url: '/pages/four/result/singleplayer?res='+this.data.res
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