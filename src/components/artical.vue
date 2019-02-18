<template>
  <div>
    
    <div class="height100">
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
      </header>
      <section class="pb138">
        <div class="guide-content">
          <!-- <p>{{detail.title}}</p>
          <p v-html="detail.content">{{detail.content}}</p> -->
          <p>我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</p>
          <p>Checkin的时候工作人员说安排了11楼的房间，后来正好13楼有空的，就给我们安排了13楼，看出去的View很多，还挺luck的</p>
          <p>我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</p>
          <p>Checkin的时候工作人员说安排了11楼的房间，后来正好13楼有空的，就给我们安排了13楼，看出去的View很多，还挺luck的</p>
          <p>我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</p>
          <p>Checkin的时候工作人员说安排了11楼的房间，后来正好13楼有空的，就给我们安排了13楼，看出去的View很多，还挺luck的</p>
          <p>我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</p>
          <p>Checkin的时候工作人员说安排了11楼的房间，后来正好13楼有空的，就给我们安排了13楼，看出去的View很多，还挺luck的</p>
          <p>我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</p>
          <p>Checkin的时候工作人员说安排了11楼的房间，后来正好13楼有空的，就给我们安排了13楼，看出去的View很多，还挺luck的</p>
          <p>我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</p>
          <p>Checkin的时候工作人员说安排了11楼的房间，后来正好13楼有空的，就给我们安排了13楼，看出去的View很多，还挺luck的</p>
        </div>
        <div class="article-select">
          <div class="article-like">
            <img src="../assets/img/article_like.png" alt>
            <span>喜欢</span>
          </div>
          <div class="article-dislike">
            <img src="../assets/img/article_dislike.png" alt>
            <span>不喜欢</span>
          </div>
        </div>
      </section>
      <a href="orders.html">
        <section class="bottom-btn">我想去</section>
      </a>
    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
  data(){
    return{
      artical:{}
    }
  },
  mothods:{
    goback(){
      this.$router.go(-1);
    }
  },
  mounted() {
    let id = this.$route.params.id-0;
    let dataName = this.$route.query.dataName;
    this.$http({
      url:'./data/artical_theme.data'
    }).then(
      res => this.artical = res.data[id-1]
    )
  },
}
</script>