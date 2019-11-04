/*
 * @Author: Paul
 * @Date: 2019-11-04 19:11:16
 * @LastEditors: Paul
 * @LastEditTime: 2019-11-04 19:11:20
 */
let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})