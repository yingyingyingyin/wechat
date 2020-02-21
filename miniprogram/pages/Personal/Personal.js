var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    },
    isMember:true,
    PList:[{
      url:'../../pages/Member/Member',//点击跳转导航
      icon:'../../img/2/huiyuan.png',
      text1:'会员中心',
      text2:'开通会员享受更多权限'

    },
      {
        url: '../../pages/Myproblem/Myproblem',
        icon: '../../img/2/myproblem.png',
        text1: '我的问题',
        text2: ''

      },
      {
        url: '',
        icon: '../../img/2/contact.png',
        text1: '联系我',
        text2: '13888888888'

      },
      {
        url: '../../pages/Aboutus/Aboutus',
        icon: '../../img/2/AboutUs1.png',
        text1: '关于我们',
        text2: ''

      }]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  clicked:function(e){
    //console.log(e)
    wx.makePhoneCall({
      phoneNumber: "18361810193",
    })
  },
  onLoad: function (options) {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
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