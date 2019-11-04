/*
 * @Author: Paul
 * @Date: 2019-11-04 18:52:23
 * @LastEditors: Paul
 * @LastEditTime: 2019-11-04 18:52:37
 */
//Customize blacklist
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','NathanRich火锅大王','千户长生']

let body = $response.body
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!='small_cover_v2'||blacklist.includes(element['args']['up_name'])){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})