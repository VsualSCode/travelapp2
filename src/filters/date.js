import {fillzero} from './fillzero'
export default{
    date(time){
        var d = new Date();
        d.setTime(time);
        let year = d.getFullYear();
        return'时间'
    }
}