import index from '../components/index.vue';
// import follow from '../components/follow.vue';
// import column from '../components/column.vue';
// import user from '../components/user.vue';
import logon from '../components/logon.vue';
// import reg from '../components/reg.vue';
// import detail from '../components/detail.vue';
import error from '../components/error.vue';
import set from '../components/set.vue';
const routes=[
  {path:'/index',component:index},
  // {path:'/follow',component:follow},
  // {path:'/column',component:column},
  // {path:'/user',component:user},
  {path:'/logon',component:logon},
  // {path:'/reg',component:reg},
  // {path:'/detail/:id',component:detail},
  {path:'/set',component:set},
  {path:'/',redirect:'/index'},
  {path:'*',component:error},
];
export default {
  routes:routes
  // mode:'history'
};