//⚠️ck在``里面填写ck，多账号换行
let qqreadbodyVal = `{"common":{"appid":1450024394,"areaid":5,"qq_ver":"3.3.0","os_ver":"iOS 13.3","mp_ver":"1.6.3","mpos_ver":"1.19.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"4F21B95F750223C5B4DF308B890A59D9","guid":3210085368,"session":"3s46m28kh4yz6ymoz2ao5tpv211uqkm9","scene":1008,"source":"wza0004wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"noHead":"1","bid":"21517573","cid":"1"},"dis":1611976973410,"ext6":20,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"21517573","bookStatus":1,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"1008_21517573"}]}
{"common":{"appid":1450024394,"areaid":5,"qq_ver":"8.5.0","os_ver":"iOS 13.3","mp_ver":"1.6.3","mpos_ver":"1.23.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"2B79911066E215C15519DBBEDDE709C1","guid":454140969,"session":"msukok82to6bvbofsn6j6zj5s0wxx5p6","scene":3001,"source":-1,"hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"noHead":"1","bid":"813049","cid":"1"},"dis":1611976897494,"ext6":15,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"813049","bookStatus":1,"bookPay":0,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"3001_813049"}]}`;

let qqreadtimeurlVal = `https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Findex%2Findex&bid=21517573&readTime=3482&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A3482%7D%7D%5D&sp=-1
https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=3001&refer=pages%2Findex%2Findex&bid=813049&readTime=2673&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A2673%7D%7D%5D&sp=-1`;

let qqreadtimeheaderVal = `{"ywsession":"3s46m28kh4yz6ymoz2ao5tpv211uqkm9","Cookie":"ywguid=3210085368;ywkey=ywI5AlU5rwZO;platform=ios;channel=mqqmina;mpVersion=1.6.3;qq_ver=3.3.0;os_ver=iOS 13.3;mpos_ver=1.19.0;platform=ios;openid=4F21B95F750223C5B4DF308B890A59D9","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"TIM/3.3.0.542 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.6.3/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.6.3"}
{"ywsession":"msukok82to6bvbofsn6j6zj5s0wxx5p6","Cookie":"ywguid=454140969;ywkey=yw6Ca1SX5FkU;platform=ios;channel=mqqmina;mpVersion=1.6.3;qq_ver=8.5.0;os_ver=iOS 13.3;mpos_ver=1.23.0;platform=ios;openid=2B79911066E215C15519DBBEDDE709C1","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"QQ/8.5.0.635 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.6.3/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.6.3"}`;



let qqreadcookie = {
        qqreadbodyVal: qqreadbodyVal,
        qqreadtimeurlVal: qqreadtimeurlVal,
        qqreadtimeheaderVal: qqreadtimeheaderVal
}

module.exports =  qqreadcookie