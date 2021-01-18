

//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, D567D71B-FCDF-482C-AE94-A1C78DD92A54)","token":"57da8491624241a9bff12a28f306eda2","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, D567D71B-FCDF-482C-AE94-A1C78DD92A54)","traceid":"3134852153483767808016109326698152bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 90B887BB-CF3C-4B24-A7B2-1F4A5DCB5084)","token":"4f5c30f719aa441e97137881f6218d95","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 90B887BB-CF3C-4B24-A7B2-1F4A5DCB5084)","traceid":"3134853883737767116816109327187082bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 8D2A9063-7DE0-4856-82E6-8DD7AA84260D)","token":"c329f1d7610a4e67ba2e91aca5437e17","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 8D2A9063-7DE0-4856-82E6-8DD7AA84260D)","traceid":"3134853050107683635216109326946712bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}`



let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  
}

module.exports =  iboxpaycookie
  


