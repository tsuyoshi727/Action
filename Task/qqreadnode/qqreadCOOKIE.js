//⚠️ck在``里面填写ck，多账号换行
let qqreadbodyVal = `{"common":{"appid":1450024394,"areaid":5,"qq_ver":"3.3.0","os_ver":"iOS 13.3","mp_ver":"1.3.1","mpos_ver":"1.19.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"3210085368","guid":3210085368,"session":"v27k2eki43vsfna08tz1qifpo3da9iv5","scene":1008,"source":"wza0004wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"noHead":"1","bid":"34236386","cid":"1"},"dis":1611008276708,"ext6":69,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"34236386","bookStatus":0,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"1008_34236386"}]}`;

let qqreadtimeurlVal = `https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Findex%2Findex&bid=34236386&readTime=3000&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A3000%2C%22pay_status%22%3A0%7D%7D%5D&sp=-1`;

let qqreadtimeheaderVal = `{"ywsession":"v27k2eki43vsfna08tz1qifpo3da9iv5","Cookie":"ywguid=3210085368;ywkey=ywDeibyd5Hx6;platform=ios;channel=mqqmina;mpVersion=1.3.1;qq_ver=3.3.0;os_ver=iOS 13.3;mpos_ver=1.19.0;platform=ios;openid=3210085368","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"TIM/3.3.0.542 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.3.1/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.3.1"}`;



let qqreadcookie = {
        qqreadbodyVal: qqreadbodyVal,
        qqreadtimeurlVal: qqreadtimeurlVal,
        qqreadtimeheaderVal: qqreadtimeheaderVal
}

module.exports =  qqreadcookie