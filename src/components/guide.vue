<template>
  <div>
    <header class="guide-header">
      <div class="page-header clear-header">
        <a href="index.html" class="page-return">
          <img src="../assets/img/return_white.png" alt class="return">
        </a>
        <span class="page-name">魔力的上海</span>
        <a href="search.html" class="page-right page-search">
          <img src="../assets/img/search.png" alt>
        </a>
      </div>
      <div class="writer">
        <div class="writer-name">
          <img src="../assets/img/guide_icon.png" alt>
          <span>向导：神经上的男神</span>
        </div>
        <div class="writer-time">
          <img src="../assets/img/time.png" alt>
          <span>发布时间：2018.11.11</span>
        </div>
      </div>
    </header>
    <!--攻略内容-->
    <div class="wrap">
      <section class="mb-10">
        <div class="guide-content-box">
          <div
            class="guide-content"
          >我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</div>
          <div class="guide-content-pic">
            <img src="../assets/img/guide_pic.png" alt>
          </div>
          <div
            class="guide-content"
          >我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</div>
        </div>
        <div class="guide-info-wrap container">
          <div class="guide-pic-sm">
            <img src="../assets/img/avatar.jpg" alt>
          </div>
          <div class="guide-info-sm">
            <div class="guide-name-sm">神经上的男神</div>
            <div class="guide-job-sm">
              <span>已接单：30</span>
              <span>主要接单地：上海</span>
            </div>
          </div>
          <div class="guide-contact">
            <a href="guide-info.html">联系他</a>
          </div>
        </div>
      </section>
      <!--评论-->
      <section class="guide-comment">
        <div class="comment-box">
          <div class="comment-num container">评论（2200）</div>
          <div class="container">
            <input type="text" class="comment-input" placeholder="写评论">
          </div>
        </div>
        <div class="comment-list">
          <div class="comment-sub">
            <div class="comment-sub-title">
              <div class="comment-pic">
                <img src="../assets/img/avatar.jpg" alt>
              </div>
              <div class="comment-info">
                <div class="comment-name">神经上的男神</div>
                <div class="comment-time">2018.11.11</div>
              </div>
            </div>
            <div class="comment-content">好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。</div>
          </div>
          <div class="comment-sub">
            <div class="comment-sub-title">
              <div class="comment-pic">
                <img src="../assets/img/avatar.jpg" alt>
              </div>
              <div class="comment-info">
                <div class="comment-name">神经上的男神</div>
                <div class="comment-time">2018.11.11</div>
              </div>
            </div>
            <div class="comment-content">好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。</div>
          </div>
          <div class="comment-sub">
            <div class="comment-sub-title">
              <div class="comment-pic">
                <img src="../assets/img/avatar.jpg" alt>
              </div>
              <div class="comment-info">
                <div class="comment-name">神经上的男神</div>
                <div class="comment-time">2018.11.11</div>
              </div>
            </div>
            <div class="comment-content">好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。</div>
          </div>
          <div class="comment-sub">
            <div class="comment-sub-title">
              <div class="comment-pic">
                <img src="../assets/img/avatar.jpg" alt>
              </div>
              <div class="comment-info">
                <div class="comment-name">神经上的男神</div>
                <div class="comment-time">2018.11.11</div>
              </div>
            </div>
            <div class="comment-content">好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。</div>
          </div>
        </div>
        <div class="comment-more">加载全部评论</div>
        <div class="comment-state">
          <div class="comment-like">
            <img src="../assets/img/like.png" alt>
            <span>2.9万</span>
          </div>
          <div class="comment-dislike">
            <img src="../assets/img/dislike.png" alt>
            <span>1200</span>
          </div>
          <div class="comment-love">
            <img src="../assets/img/love.png" alt>
            <span>2200</span>
          </div>
          <div class="comment-share">
            <img src="../assets/img/share.png" alt>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
/* @import url(../assets/css/style.css); */
</style>



 <script type="text/javascript">
import getRem from "../assets/js/flexible.min.js";

export default {
  data() {
    return {
      guide: {}
    };
  },
  mothods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // console.log($);

    $(function() {
      var more = $(".comment-more");
      var commentList = $(".comment-list");
      var num = 0;

      $(more).on("click", function() {
        if (num == 0) {
          $(commentList).css({
            overflow: "visible",
            "max-height": "none"
          });
          $(more).text("收起评论");
          num = 1;
        } else {
          $(commentList).css({
            overflow: "hidden",
            "max-height": "6.45rem"
          });
          $(more).text("加载全部评论");
          num = 0;
        }
      });
    });
    let id = this.$route.params.id - 0;
    let dataName = this.$route.query.dataName;
    this.$http({
      url: "./data/artical_raider.data"
    }).then(res => (this.guide = res.data[id - 1]));
  }
};
</script>
