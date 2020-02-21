// miniprogram/pages/Member/Member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户昵称
    },
    isMember: true,
    memberData:[{
     text: '1、开通会员可以免费观看所有视频'
    },{

        text: '2、开通会员可以免费观看所有视频,享受很多优惠'
      },
      {

        text: '3、开通会员可让你获得更多的知识权限'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res) {
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
  showMember: function (e) {
    wx: wx.navigateTo({
      url: '../../pages/onMember/onMember',

    })
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