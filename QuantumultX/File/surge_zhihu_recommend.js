/*
 * @Author: Paul
 * @Date: 2019-11-04 18:48:45
 * @LastEditors: Paul
 * @LastEditTime: 2019-11-04 18:48:50
 */
let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=='slot_event_card'||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})