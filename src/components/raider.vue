<template>
  <div>
    <section class="raider-wrap">
      <div class="theme-title">
        <span class="index-title-square"></span>
        <span>攻略路线</span>
        <span>|</span>
        <span>RAIDERS</span>
      </div>
      <div class="raider-box" v-for="item of raider" :key="item.id">
        <router-link to="{name:'guide',params:{id:item.id},query:{dataName:dataName}}">
          <div class="raider-sub">
            <div class="raider-left">
              <div class="raider-title">
                <!-- 她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁 -->
                {{item.id}}.{{item.title}}
              </div>
              <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
              <div class="raider-bottom">
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_like.png" alt>
                  2.9万
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_dislike.png" alt>
                  1200
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_love.png" alt>
                  2200
                </span>
              </div>
            </div>
            <div class="raider-right">
              <img src="../assets/img/guide_pic.png" alt>
            </div>
          </div>
        </router-link>

        <router-link
          to="{name:'guide',params:{id:item.id},query:{dataName:dataName}}"
          v-for="item of raider"
          :key="item.id"
        >
          <div class="raider-sub">
            <div class="raider-left">
              <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
              <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
              <div class="raider-bottom">
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_like.png" alt>
                  2.9万
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_dislike.png" alt>
                  1200
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_love.png" alt>
                  2200
                </span>
              </div>
            </div>
            <div class="raider-right">
              <img src="../assets/img/guide_pic.png" alt>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>
<style>
</style>
<script>
export default {
  props: ["raider", "dataName"]
};
</script>