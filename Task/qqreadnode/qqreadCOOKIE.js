//⚠️ck在``里面填写ck，多账号换行
let qqreadbodyVal = `{"common":{"appid":1450024394,"areaid":5,"qq_ver":"8.5.0","os_ver":"iOS 13.3","mp_ver":"1.9.1","mpos_ver":"1.23.0","brand":"iPhone","model":"iPhone 8Plus<iPhone10,2>","screenWidth":414,"screenHeight":736,"windowWidth":414,"windowHeight":687,"openid":"4F21B95F750223C5B4DF308B890A59D9","guid":3210085368,"session":"8njv292a1rjqni2xvuaglq7w3jj1wwmu","scene":1008,"source":"wza0004wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"bid":"32835834","cid":"1","noHead":"1"},"dis":1612583780782,"ext6":16,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"32835834","bookStatus":0,"bookPay":1,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"1008_32835834"},{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-detail/index","refer":"pages/index/index","options":{"bid":"32835834"},"dis":1612583779361,"ext6":14,"eventID":"bookDetail_comment_I","type":"shown","did":"a0000002Dm6E1k7uS3000DVZ","cl_pos":3,"bid":"32835834","bookStatus":0,"bookPay":1,"from":"1008_32835834"}]}`;

let qqreadtimeurlVal = `https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Findex%2Findex&bid=32835834&readTime=2075&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A2075%7D%7D%5D&sp=-1`;

let qqreadtimeheaderVal = `{"ywsession":"8njv292a1rjqni2xvuaglq7w3jj1wwmu","Cookie":"ywguid=3210085368;ywkey=ywD5CRSbckX4;platform=ios;channel=mqqmina;mpVersion=1.9.1;qq_ver=8.5.0;os_ver=iOS 13.3;mpos_ver=1.23.0;platform=ios;openid=4F21B95F750223C5B4DF308B890A59D9","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"QQ/8.5.0.635 CFNetwork/1121.2.2 Darwin/19.2.0","Referer":"https://appservice.qq.com/1110657249/1.9.1/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"1.9.1"}`;



let qqreadcookie = {
        qqreadbodyVal: qqreadbodyVal,
        qqreadtimeurlVal: qqreadtimeurlVal,
        qqreadtimeheaderVal: qqreadtimeheaderVal
}

module.exports =  qqreadcookie