/*
 * @Author: Paul
 * @Date: 2019-11-04 19:11:57
 * @LastEditors: Paul
 * @LastEditTime: 2019-11-04 19:12:05
 */
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','NathanRich火锅大王','千户长生']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['right_desc_1'])||element["card_type"] !== "small_cover_v5"){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})