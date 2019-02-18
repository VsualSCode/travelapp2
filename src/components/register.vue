<template>
  <div>
    <header class="page-header">
      <a href="javascript:windown.history.go(-1);" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </a>
      <span class="page-name">注册</span>
      <router-link to="/logon" class="page-right">已有账号</router-link>
    </header>
    <section class="logon-box">
      <!-- <input type="text" placeholder="手机号"> -->
      <input type="text" placeholder="账号">
      <!-- <input type="text" placeholder="验证码"> -->
      <input type="password" placeholder="密码">
      <!-- <a href="" class="send-code">发送验证码</a> -->
      <div class="btn-box">
        <router-link to="/logon">
          <button>注册</button>
        </router-link>
      </div>
      <div class="user-agreement">
        点击注册表示同意
        <a href="user-agreement.html">用户协议</a>
      </div>
    </section>
  </div>
</template>
<style>
</style>
<script>
export default {
  mothods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
