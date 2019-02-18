import {VIEW_COOM,CHECK_HOMEPAGE,UPDATE_INDEX} from './types'

let mutations={ 

  // [VIEW_NAV]:(state,payload)=> state.bNav=payload,
  [VIEW_COOM]:(state,payload)=> state.bCoom=payload,
  [UPDATE_INDEX]:(state,payload)=> state.index=payload,
  // [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
  [CHECK_HOMEPAGE]:(state,payload)=> state.CHECK_HOMEPAGE=payload.CHECK_HOMEPAGE,

};
export default mutations;
