import axios from 'axios';

import * as types from './types';

let actions={
  // [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_COOM]:({commit,state},payload)=>commit(types.VIEW_COOM,payload),
  [types.UPDATE_INDEX]:({commit,state},payload)=>commit(types.UPDATE_INDEX,payload.data),

  // [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
  [types.CHECK_HOMEPAGE]:({commit,state},payload)=>{
    return axios({
      url:'/data/HOMEPAGE.json',
      params:{username:payload.username,password:payload.password}
    }).then(
      res=>
      {commit({type:types.CHECK_HOMEPAGE,set:res.data})
      return res.data.auth
      }
        
    )
  }
};
export default actions;