// miniprogram/pages/onMember/onMember.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    radioItems: [
      { name: '微信', value: '0', Imgurl:'../../img/2/wx.png' },
      { name: '支付宝', value: '1', Imgurl:'../../img/2/zfb.png' , checked: true }
    ],
    moneyItems: [
      { name: '一个月VIP',money:'￥20', value: '0' },
      { name: '半年VIP', money:'￥60',value: '1', checked: true },
      {name:'一年VIP',money:'￥100',value:'2'}
    ]
  },
//支付方式单选
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  //开通会员类型单选
  moneyChange2: function (e) {
    console.log('money发生change事件，携带value值为：', e.detail.value);

    var moneyItems = this.data.moneyItems;
    for (var i = 0, len = moneyItems.length; i < len; ++i) {
      moneyItems[i].checked = moneyItems[i].value == e.detail.value;
    }

    this.setData({
      moneyItems: moneyItems
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})