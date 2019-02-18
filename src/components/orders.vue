<template>
<div>
<section class="form-box">
    <div class="form-sub">
        <span>前往城市</span>
        <input type="text" placeholder="城市" id="location" readonly>
        <input id="value2" type="hidden" />
    </div>
    <div class="form-sub">
        <span>时间</span>
        <input type="text" placeholder="出发时间" id="date" readonly>
    </div>
    <div class="form-sub">
        <span>同行人数</span>
        <input type="text" placeholder="同行人数">
    </div>
    <div class="form-sub">
        <span>旅行意愿</span>
        <input type="checkbox" value="0" id="formSub1"><label for="formSub1">人文</label>
        <input type="checkbox" value="0" id="formSub2"><label for="formSub2">历史</label>
        <input type="checkbox" value="0" id="formSub3"><label for="formSub3">自然</label>
    </div>
    <div class="form-sub">
        <span>备注</span>
        <textarea></textarea>
    </div>
    <div class="orders-btn">
        <a href="guide-select.html"><button>下一步</button></a>
    </div>
</section>
<!-- <section class="comm-nav">
    <div class="nav-index">
        <a href="index.html">
            <div class="nav-img-box">
                <img src="img/nav_index.png" alt="">
            </div>
            <div>首页</div>
        </a>
    </div>
    <div class="nav-travel">
        <a href="orders.html">
            <div class="nav-img-box">
                <img src="img/nav_travel_chk.png" alt="">
            </div>
            <div  class="nav-active">旅行</div>
        </a>
    </div>
    <div class="nav-chat">
        <a href="chat-list.html">
            <div class="nav-img-box">
                <img src="img/nav_chat.png" alt="">
            </div>
            <div>聊天</div>
        </a>
    </div>
    <div class="nav-user">
        <a href="home-page.html">
            <div class="nav-img-box">
                <img src="img/nav_user.png" alt="">
            </div>
            <div>主页</div>
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