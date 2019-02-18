<template>
  <div>
    <header class="logon-header"></header>
    <section class="logon-box">
      <input type="text" placeholder="账号" v-model="username">
      <input type="password" placeholder="密码" v-model="password">
      <a href class="forget"></a>
      <div class="btn-box">
        <router-link to="/index"><button @click="checkLogon">登录</button></router-link>
      </div>
      <div class="register-box">
        没有账号？
        <router-link to="/register">注册</router-link>
      </div>
    </section>
    <section class="logon-link">
      <div class="logon-link-text">使用其他账号登录</div>
      <div class="logon-link-list">
        <a href="">
          <img src="../assets/img/wechat.png" alt>
        </a>
        <a href="">
          <img src="../assets/img/weibo.png" alt>
        </a>
        <a href="">
          <img src="../assets/img/qq.png" alt>
        </a>
      </div>
    </section>
  </div>
</template>
<style>
</style>
<script>
import * as types from '../store/types'
export default {
  data(){
    return{
      username:'aliali',
      password:'aliali123'
      }
    },
  methods: {
    logon(){
      this.$http({
        url:'htpt://localhost:3000/logon',
        params:{
          username:this.username,
          password:this.password,
        },
        // withCredentials:true
      }).then((res)=>{
        console.ls('访问logon后',res.data);
        if(res.data.error == 0){
          console.log('成功可以跳转了')
        }
      })
    },
    checkLogon(){
      // this.$store.dispatch('类型',负载)
      // this.$store.dispatch({type:类型,负载key:value})  //actions ->payload.key
      this.$store.dispatch({
        type:types.CHECK_SET,
        username:this.username,
        password:this.password
        }.then((auth)=>{
            //抓state仓库 this.$store.state.user.auth 
            //抓 res结果
            if(auth){
              this.$router.push('/set')
            }else{
              this.$router.push('/error')
            }
          }
        ))  //actions ->payload.key

    },
    
  }
}
</script>

