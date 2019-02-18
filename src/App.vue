<template>
  <div id="app">
    <!-- {1 | fillzero} -->
     <!-- <index></index> -->
    <!-- <indexheader></indexheader> -->
    <transition
       enter-active-class="animated fadeIn"
    >

    <router-view></router-view>
    </transition>
    <!-- <theme></theme> -->
    <!-- <raider></raider> -->
    <comm v-show="bCoom"></comm>
    <!-- <artical></artical>
    <orders></orders>
    <chatlist></chatlist>
    <homepage></homepage>
    <set></set>
    <logon></logon>
    <register></register>
    <guide></guide>  -->
    <sass-component></sass-component>
  </div>
</template>
<script>
import index from "./components/index";
// import indexheader from "./components/indexheader";
// import theme from "./components/theme";
// import raider from "./components/raider";
import comm from "./components/comm";
// import artical from "./components/artical";
// import orders from "./components/orders";
// import chatlist from "./components/chatlist";
// import homepage from "./components/homepage";
// import set from "./components/set";
// import logon from "./components/logon";
// import register from "./components/register";
//  import guide from "./components/guide";
import {mapGetters} from 'vuex';
import * as types from './store/types';
import  SassComponent from './components/sass-component'
export default {
  name:'app',
  components: {
    // index,
    // indexheader,
    // theme,
    // raider,
    comm,
    // artical,
    // orders,
    // chatlist,
    // homepage,
    // set,
    // logon,
    // register,
    // guide
    SassComponent
    },
    computed: mapGetters([
          'bCoom'
    ]),
    watch: {//路由监听
      $route:{
        handler:function(to){
          let path = to.path;
          if(/index|orders/.test(path)){
             this.$store.dispatch(types.VIEW_COOM,true);
            //  this.$store.disabled(types.VIEW_COOM,ture);
          }
           if(/logon|register/.test(path)){
             this.$store.dispatch(types.VIEW_COOM,false);
            //  this.$store.disabled(types.VIEW_COOM,ture);
          }
        },
        immediate:true
      }
    },
    
};
</script>


