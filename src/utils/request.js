// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from "axios";


export const baseURL = process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL,
    timeout: 5000
})
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(res => res.data, error => {
    console.log(error)
    return Promise.reject(error)

})

// 请求工具函数
export default (url, method = 'get', submitData, config) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        // 在对象，['params']:submitData ===== params:submitData 这样理解
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
        headers:config
    })
}
