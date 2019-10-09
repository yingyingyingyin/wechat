//index.js
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    inputShowed: false,
    movies: [{
        url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'
      },
      {
        url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'
      },
      {
        url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'
      },
      {
        url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      }
    ],
    title_one: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
    title_two: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
    video_url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    objectUrl: 'img/share.png',
    src: '',
    danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],


    teacher_array: [{
      url: 'https://www.16pic.com/pic/pic_8994927.html'
      },
      {
        url:'https://img.16pic.com/00/89/94/16pic_8994927_s.jpg'
      }
    ]
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onReady: function(res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
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