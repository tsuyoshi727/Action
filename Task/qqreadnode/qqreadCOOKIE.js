//⚠️ck在``里面填写ck，多账号换行
let qqreadbodyVal = `{"common":{"appid":1450024394,"areaid":5,"qq_ver":"8.5.0","os_ver":"iOS 13.3","mp_ver":"1.9.1","mpos_ver":"1.23.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"4F21B95F750223C5B4DF308B890A59D9","guid":3210085368,"session":"0gzovkqyqvzvl3ydkk8m4mzou1qhlkd6","scene":1008,"source":"wza0004wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"bid":"14945928","cid":"1","noHead":"1"},"dis":1612927698946,"ext6":18,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"14945928","bookStatus":1,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"1008_14945928"},{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-detail/index","refer":"pages/index/index","options":{"bid":"14945928"},"dis":1612927697694,"ext6":16,"eventID":"bookDetail_comment_I","type":"shown","did":"a00000010i7M1kY00c0007zV","cl_pos":3,"bid":"14945928","bookStatus":1,"bookPay":1,"from":"1008_14945928"}]}
{"common":{"appid":1450024394,"areaid":5,"qq_ver":"8.5.0","os_ver":"iOS 13.3","mp_ver":"1.9.1","mpos_ver":"1.23.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"2B79911066E215C15519DBBEDDE709C1","guid":454140969,"session":"1bwtgeenqksqifb5jximjyvq1m3g2fe2","scene":1008,"source":"wza0004wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"sign_window_close_I","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"bid":"185864","cid":"1","noHead":"1"},"dis":1612927655730,"ext6":26,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"185864","bookStatus":1,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"1008_185864"},{"click1":"bookDetail_bottomBar_read_C","click2":"sign_window_close_I","route":"pages/book-detail/index","refer":"pages/index/index","options":{"bid":"185864"},"dis":1612927654292,"ext6":24,"eventID":"bookDetail_comment_I","type":"shown","did":"a00000000mLo1f3L3w000ron","cl_pos":3,"bid":"185864","bookStatus":1,"bookPay":1,"from":"1008_185864"}]}`;

let qqreadtimeurlVal = `https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Findex%2Findex&bid=14945928&readTime=2444&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A2444%7D%7D%5D&sp=-1
https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Findex%2Findex&bid=185864&readTime=2194&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A2194%7D%7D%5D&sp=-1`;

let qqreadtimeheaderVal = `{"ywsession":"0gzovkqyqvzvl3ydkk8m4mzou1qhlkd6","Cookie":"ywguid=3210085368;ywkey=ywD5CRSbckX4;platform=ios;channel=mqqmina;mpVersion=1.9.1;qq_ver=8.5.0;os_ver=iOS 13.3;mpos_ver=1.23.0;platform=ios;openid=4F21B95F750223C5B4DF308B890A59D9","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"QQ/8.5.0.635 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.9.1/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.9.1"}
{"ywsession":"1bwtgeenqksqifb5jximjyvq1m3g2fe2","Cookie":"ywguid=454140969;ywkey=yw6Ca1SX5FkU;platform=ios;channel=mqqmina;mpVersion=1.9.1;qq_ver=8.5.0;os_ver=iOS 13.3;mpos_ver=1.23.0;platform=ios;openid=2B79911066E215C15519DBBEDDE709C1","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"QQ/8.5.0.635 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.9.1/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.9.1"}`;



let qqreadcookie = {
        qqreadbodyVal: qqreadbodyVal,
        qqreadtimeurlVal: qqreadtimeurlVal,
        qqreadtimeheaderVal: qqreadtimeheaderVal
}

module.exports =  qqreadcookie