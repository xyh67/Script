/*
 * @Author: Paul
 * @Date: 2019-11-04 18:49:40
 * @LastEditors: Paul
 * @LastEditTime: 2019-11-04 18:49:51
 */
let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
$done({body})