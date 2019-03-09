/*
* ajax 请求函数模块
* 返回值：promise对象（异步返回的数据是：response.data）
* */
import axios from 'axios'
export default function ajax(url='',data={},type='GET') {
  return new Promise((resolve,reject)=>{  //简化外部调用
    //执行ajax请求

    let promise
    if(type=='GET'){
      //准备url 和query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr += `${key} = ${data[key]}&`
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&')) //截取，从第一位开始，截取到最后‘&’所在的位置，不包含最后一个’&‘
        url = `${url}?${dataStr}`
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      //发送post请求
      promise = axios.post(url,data)
    }

    promise.then((response)=>{
      //成功时执行resolve
      resolve(response.data)
    }).catch((error)=>{
      //失败时执行reject
      reject(error)
    })
  })

}
