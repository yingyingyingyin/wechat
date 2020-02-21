const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    video_url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    default1: "../../img/2/default.jpeg",
    videoimage: "block", //默认显示封面
    video_introduce: "该视频小学数学教学视频全套,全国一线教师精讲各科难点,知识点.全科免费听,数学教学视频全套!07-19年1800万学员188位状元和你共同学习.",
    textImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572355091068&di=fe2944ee5d51f820c10c7eee2e6f9149&imgtype=0&src=http%3A%2F%2Fziyuan.baby611.com%2Fdata%2Fsoft_img%2F1404356925.jpg",
    teachDesign: `一、教学与感知
    1.引入师：小朋友，我们以前已经学过造数，现在我们一起来复习一下用数卡①②③造三位数，看谁造得又对又多。
  2. 学生造三位数。
    3. 交流反馈 师：造三位数时，你是怎样想的？造的数是几？最小数是几？ 〖组织学生回忆造数方法，明确学习任务，增强学习活动的针对性和有效性，为学习新知铺路架桥。〗`,
    example:`（1）想一想，怎样才能得到差？ 
    （2）独立尝试，交流反馈。 
    987-123= 864?`,
    xiti:`312－298=14  412－398=14 
    612－598=14 712－698=14 
    812－792=14`,
    extand:`减法塔的意义，减法塔的组成，相减查的规律  
    参考文献：
    （https://www.docin.com/p-1347426811.html）
    希望同学们学好知识，今天建造减法塔，将来为祖国建造更美丽的塔!`

  },

  upWindow: function() {

  },
  //点击播放按钮，封面图片隐藏,播放视频
  bindplay: function(e) {
    this.setData({
        tab_image: "none"
      }),
      this.videoCtx.play()
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  }

})