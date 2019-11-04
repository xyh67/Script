/*
 * @Author: Paul
 * @Date: 2019-11-04 19:04:22
 * @LastEditors: Paul
 * @LastEditTime: 2019-11-04 19:04:25
 */
let body = $response.body
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')||!element.hasOwnProperty('aid')){      
      body['data']['relates'].splice(index,1)  
    }
})
delete body['data']['cms']
body=JSON.stringify(body)
$done({body})