<template>
  <div>
    <header class="home-header">
      <div class="home-title">主页</div>
      <div class="home-avatar">
        <img src="../assets/img/avatar.jpg" alt>
      </div>
      <div class="home-name">神经上的男神</div>
      <div class="home-btn">
        <a href="info.html">编辑资料</a>
      </div>
    </header>
    <div class="mb-bg"></div>
    <section class="home-box">
      <a href="my-trip.html">
        <div class="home-sub">
          <div class="home-sub-icon">
            <img src="../assets/img/home_1.png" alt>
          </div>
          <div class="home-sub-sort">我的行程</div>
          <div class="float-right home-right">
            <img src="../assets/img/select.png" alt>
          </div>
        </div>
      </a>
      <a href="ticket.html">
        <div class="home-sub">
          <div class="home-sub-icon">
            <img src="../assets/img/home_2.png" alt>
          </div>
          <div class="home-sub-sort">优惠券</div>
          <div class="float-right home-right">
            <img src="../assets/img/select.png" alt>
          </div>
        </div>
      </a>
      <div class="home-sub">
        <div class="home-sub-icon">
          <img src="../assets/img/home_3.png" alt>
        </div>
        <div class="home-sub-sort">联系客服</div>
        <div class="float-right home-right">
          <img src="../assets/img/select.png" alt>
        </div>
      </div>
      <router-link to="/set">
        <div class="home-sub">
          <div class="home-sub-icon">
            <img src="../assets/img/home_4.png" alt>
          </div>
          <div class="home-sub-sort">设置</div>
          <div class="float-right home-right">
            <img src="../assets/img/select.png" alt>
          </div>
        </div>
      </router-link>
    </section>
    <!-- <section class="comm-nav">
      <div class="nav-index">
        <a href="index.html">
          <div class="nav-img-box">
            <img src="../assets/img/nav_index.png" alt>
          </div>
          <div>首页</div>
        </a>
      </div>
      <div class="nav-travel">
        <a href="orders.html">
          <div class="nav-img-box">
            <img src="../assets/img/nav_travel.png" alt>
          </div>
          <div>旅行</div>
        </a>
      </div>
      <div class="nav-chat">
        <a href="chat-list.html">
          <div class="nav-img-box">
            <img src="../assets/img/nav_chat.png" alt>
          </div>
          <div>聊天</div>
        </a>
      </div>
      <div class="nav-user">
        <a href="home-page.html">
          <div class="nav-img-box">
            <img src="../assets/img/nav_user_chk.png" alt>
          </div>
          <div class="nav-active">主页</div>
        </a>
      </div>
    </section> -->
 <section class="comm-nav">
    <div class="nav-index">
        <router-link to="/index">
        
            <div class="nav-img-box">
                <img src="../assets/img/nav_index_chk.png" alt="">
            </div>
            <div  class="nav-active">首页</div>
     
        </router-link>
        
    </div>
    <div class="nav-travel">
        <router-link to="/orders">
      
            <div class="nav-img-box">
                <img src="../assets/img/nav_travel.png" alt="">
            </div>
            <div>旅行</div>
        
        </router-link>
        
    </div>
    <div class="nav-chat">
        <router-link to="/chatlist">
         
            <div class="nav-img-box">
                <img src="../assets/img/nav_chat.png" alt="">
            </div>
            <div>聊天</div>
      
        </router-link>
        
    </div>
    <div class="nav-user">
        <router-link to="/homepage">
            <div class="nav-img-box">
                <img src="../assets/img/nav_user.png" alt="">
            </div>
            <div>主页</div>
        </router-link>
        
       
    </div>
</section>
  </div>
</template>
<style>
</style>
<script>
    import store from '../store'
    export default {
      beforeRouteEnter(to, from, next){
        //this.$store.state.count
        if(store.state.homepage.auth){//同步条件
          next()
        }else{
          next('/logon')
        }
      },
      methods: {
        logout(){
          //通知后端删cookie，得到结果后，跳转this.$router
        }
      },
      mounted() {
        this.$http({
          url:'http://localhost:3000/users',
        }).then(
          res => console.log('前端访问users页面',res)
        );
      },
    }
</script>
