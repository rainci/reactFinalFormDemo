/**
 * @author rainci(刘雨熙)
 * @time 2020.11.30
 */
const defaultState = {
    commonData: {},//公共data
}
const commonData = (state = defaultState, {type}) => {//多个页面公共请求的不变的数据
    switch(type){
        case 'commonData':
            return {
                ...state,
            }
        default:
            return state    
    }
}
export default commonData;