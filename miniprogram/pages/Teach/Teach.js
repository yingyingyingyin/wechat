// miniprogram/pages/Teach/Teach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textimgurl: "../../img/2/teach1.jpg",
    select: false,
    Tmselect1: false,

    tihuoWay1: '',
    tihuoWay2: '',
    gradeList: {
      1: "一年级",
      2: "二年级",
      3: "三年级",
      4: "四年级",
      5: "五年级",
      6: "六年级",
    },
    zjlist: [{
        name: '第一章'
      },
      {
        name: '第二章'
      },
      {
        name: '第三章'
      },
      {
        name: '第四章'
      }
    ],
    tmlist: [{
        number: 1
      },
      {
        number: 2
      }, {
        number: 3
      }
    ]
  },
  bindShowMsg1() {
    this.setData({
      select: !this.data.select,
      Tmselect1: false

    })
  },
  bindShowMsg2() {
    this.setData({
      Tmselect1: !this.data.Tmselect1
     

    })
  },
  mySelect1(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay1: name,
      select: false
    })
  },
  mySelect2(e) {
    var number = e.currentTarget.dataset.number
    this.setData({
      tihuoWay2: number,
      Tmselect1: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: this.data.gradeList[options.grade] //页面标题为路由参数
    });
    console.log(options.currentTeach);
    var that = this;
    const db2 = wx.cloud.database();
    db2.collection('_Video').where({
      nameToShow: 1,
      type: parseInt(options.currentTeach)
    }).get({
      success: function(res) {
        console.log(res);
        that.setData({
          tihuoWay1: res.data[0].firstName,
          tihuoWay2: res.data[0].secondName,
        });
      }
    })
  },
  Commit:function(e){
wx:wx.navigateTo({
  url: '../../pages/Video/Video',
 
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