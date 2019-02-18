<template>
<div>
 <section class="theme-box">
    <div class="theme-title">
      <span class="index-title-square"></span>
      <span>推荐主题</span>
      <span>|</span>
      <span>THEME</span>
      <img src="../assets/img/index_more.png" alt class="more-right">
    </div>
    <div class="theme-list"
    v-for="item of theme"
    :key="item.id"
    >
      <!-- <p
         v-for="item of list"
         :key="item.id"
      > -->
      <!-- <router-link to="{name:'artical',params:{id:item.id},query:{dataName:dataName}}"> -->
        <router-link to="{name:'artical',params:{id:item.id},query:{dataName:dataName}}">
        <div class="theme-sub">
          <div class="theme-title-box">
            <div class="theme-sub-title">{{item.id}}.{{item.title}}</div>
            <!-- <div class="theme-sub-title"></div> -->
            <div class="theme-time">2018.11.11</div>
          </div>
          <div class="thmem-writer-box">
            <div class="theme-writer">
              <div class="theme-avatar">
                <img src="../assets/img/avatar.jpg" alt="">
              </div>
              <span>{{item.artical}}</span>
            </div>
            <div class="theme-like">
              <img src="../assets/img/love.png" alt="">
              <span>2200</span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- </p> -->
     <!-- <p
         v-for="item of list"
         :key="item.id"
      > -->
     <!-- <router-link to="{name:'artical',params:{id:items.id},query:{dataName:dataName}}"
      -->
      <router-link to="{name:'artical',params:{id:item.id},query:{dataName:dataName}}"
        v-for="item of theme"
         :key="item.id"
      >
        <div class="theme-sub">
          <div class="theme-title-box">
            <div class="theme-sub-title">{{item.id}}.{{item.title}}</div>
            <!-- <div class="theme-sub-title"></div> -->
            <div class="theme-time">2018.11.11</div>
          </div>
          <div class="thmem-writer-box">
            <div class="theme-writer">
              <div class="theme-avatar">
                <img src="../assets/img/avatar.jpg" alt="">
              </div>
              <span>{{item.artical}}</span>
            </div>
            <div class="theme-like">
              <img src="../assets/img/love.png" alt="">
              <span>2200</span>
            </div>
          </div>
        </div>
      </router-link>

    <!-- /p> -->
    </div>
    <div class="mb-bg"></div>
 </section>
</div>
 
</template>
<style>
</style>

<script>
export default {
  props:['theme','dataName']
}
</script>
