var app = getApp()
Page({
  data: {
    currentTab: 0,
    oneGrade_img_url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2603906363,1645143356&fm=26&gp=0.jpg",
    grade: 0,
    //语文功能列表
    gradeList: {
      1: "一年级",
      2: "二年级",
      3: "三年级",
      4: "四年级",
      5: "五年级",
      6: "六年级",
    },

    //导航栏科目 注意科目要与功能列表学科个数相等
    swiperTab: [{
        index: 0,
        title: "语文"
      },
      {
        index: 1,
        title: "数学"
      },
        {
        index: 2,
        title: "英语"
      }
    ],
    swiper_item_list: [
        {
            title: "课本讲解",
        icon: "../../img/2/book_1.png",
        nav_url: "", //语文 课本讲解 点击跳转路径

          },
          {
            title: "习题讲解",
            icon: "../../img/2/book_2.png",
            nav_url: "", //语文 习题讲解 点击跳转路径

          },
          {
            title: "试卷讲解",
            icon: "../../img/2/book_3.png",
            nav_url: "", //语文 试卷讲解 点击跳转路径

          }
    ],
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数


    wx.setNavigationBarTitle({
      title: this.data.gradeList[options.grade] //页面标题为路由参数
    });





    var that = this
    const db2 = wx.cloud.database();
    db2.collection('_Course').where({
      _id: "1d27507f-519a-40a5-94a7-42581fb17fa0"
    }).get({
      success: function (res) {
        //console.log(that.data.swiperTab);
       // console.log(res.data[0][options.grade]);
        that.setData({
          swiperTab:res.data[0][options.grade],
        });
        console.log(that.data.swiperTab);
      }
    })

    
    console.log(this.data.currentTab)
    this.setData({
      grade: options.grade});
    this.setData({
     
      swiper_item_list: [
        {
          title: "课本讲解",
          icon: "../../img/2/book_1.png",
          nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=0", // 课本讲解 点击跳转路径

        },
        {
          title: "习题讲解",
          icon: "../../img/2/book_2.png",
          nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=1", // 习题讲解 点击跳转路径

        },
        {
          title: "试卷讲解",
          icon: "../../img/2/book_3.png",
          nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=2", // 试卷讲解 点击跳转路径

        }
      ],
    });

  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    this.setData({
      currentTab: e.detail.current
    });
    this.setData({
      swiper_item_list: [
        {
          title: "课本讲解",
          icon: "../../img/2/book_1.png",
          nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=0", // 课本讲解 点击跳转路径

        },
        {
          title: "习题讲解",
          icon: "../../img/2/book_2.png",
          nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=1", // 习题讲解 点击跳转路径

        },
        {
          title: "试卷讲解",
          icon: "../../img/2/book_3.png",
          nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=2", // 试卷讲解 点击跳转路径

        }
      ],
    });
    console.log(this.data.currentTab)
  },
  //点击切换
  clickTab: function(e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      });
      that.setData({
        swiper_item_list: [
          {
            title: "课本讲解",
            icon: "../../img/2/book_1.png",
            nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=0", // 课本讲解 点击跳转路径

          },
          {
            title: "习题讲解",
            icon: "../../img/2/book_2.png",
            nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=1", // 习题讲解 点击跳转路径

          },
          {
            title: "试卷讲解",
            icon: "../../img/2/book_3.png",
            nav_url: "../../pages/Teach/Teach?grade=" + that.data.grade + "&currentTab=" + that.data.currentTab + "&currentTeach=2", // 试卷讲解 点击跳转路径

          }
        ],
      });

    }
  }

})