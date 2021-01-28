//⚠️ck在``里面填写ck，多账号换行
let qqreadbodyVal = `{"common":{"appid":1450024394,"areaid":5,"qq_ver":"3.3.0","os_ver":"iOS 13.3","mp_ver":"1.5.3","mpos_ver":"1.19.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"4F21B95F750223C5B4DF308B890A59D9","guid":3210085368,"session":"dgp6d78uc5ejl0bgoj59ifzdjf0h62i6","scene":1008,"source":"wza0004wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"noHead":"1","bid":"23347174","cid":"1"},"dis":1611813903704,"ext6":33,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"23347174","bookStatus":1,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"1008_23347174"}]}`;

let qqreadtimeurlVal = `https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Findex%2Findex&bid=23347174&readTime=2153&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A2153%2C%22pay_status%22%3A0%7D%7D%5D&sp=-1`;

let qqreadtimeheaderVal = `{"ywsession":"dgp6d78uc5ejl0bgoj59ifzdjf0h62i6","Cookie":"ywguid=3210085368;ywkey=ywO5VZKRxChP;platform=ios;channel=mqqmina;mpVersion=1.5.3;qq_ver=3.3.0;os_ver=iOS 13.3;mpos_ver=1.19.0;platform=ios;openid=4F21B95F750223C5B4DF308B890A59D9","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"TIM/3.3.0.542 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.5.3/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.5.3"}`;



let qqreadcookie = {
        qqreadbodyVal: qqreadbodyVal,
        qqreadtimeurlVal: qqreadtimeurlVal,
        qqreadtimeheaderVal: qqreadtimeheaderVal
}

module.exports =  qqreadcookie