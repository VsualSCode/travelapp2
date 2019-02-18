<template>
  <div>
    <header class="page-header">
      <span class="page-name">聊天</span>
    </header>
    <section class="min-height chat-list">
      <a href="chat.html">
        <div class="chat-list-sub">
          <div class="guide-pic-sm">
            <img src="../assets/img/avatar.jpg" alt="">
          </div>
          <div class="chat-content">
            <div class="chat-name">神经上的男神</div>
            <div class="chat-text">您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？</div>
          </div>
          <div class="float-right chat-right">昨天</div>
        </div>
      </a>
      <a href="chat.html">
        <div class="chat-list-sub">
          <div class="guide-pic-sm">
            <img src="../assets/img/avatar.jpg" alt>
          </div>
          <div class="chat-content">
            <div class="chat-name">神经上的男神</div>
            <div class="chat-text">您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？</div>
          </div>
          <div class="float-right chat-right">2018.11.11</div>
        </div>
      </a>
    </section>
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

