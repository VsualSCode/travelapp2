<template>
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
</template>
<style>

</style>
