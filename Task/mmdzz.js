const $ = new Env('考状元娶老婆二合一');
let status;
status = (status = ($.getval("qlpstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const qlphdArr = ['{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404258\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"82bb78e388314cce85fa74022d241ad7\",\"deviceId\":\"82bb78e388314cce85fa74022d241ad7\",\"userId\":\"1386508075797499906\",\"platform\":\"ios\",\"signature\":\"5562a5e0356f56b8b7957780b6c19047\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404483\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"eedb898f132c4c6eb04e9bdc0e050d12\",\"deviceId\":\"eedb898f132c4c6eb04e9bdc0e050d12\",\"userId\":\"1386508833667477506\",\"platform\":\"ios\",\"signature\":\"3303db1aa36adc523735f6fc36ec015a\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404787\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"6745832c841045eeaf6751b6144cc843\",\"deviceId\":\"6745832c841045eeaf6751b6144cc843\",\"userId\":\"1386510292172591106\",\"platform\":\"ios\",\"signature\":\"21f318c863520191a02c7d2a11b88f1d\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404844\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"e8f502784ca94216a5c0c57542f6be9b\",\"deviceId\":\"e8f502784ca94216a5c0c57542f6be9b\",\"userId\":\"1386510529628917762\",\"platform\":\"ios\",\"signature\":\"06fa190960c84232919212a120de6131\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404959\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"fb3e0c3646794a4aaafd301cadb68254\",\"deviceId\":\"fb3e0c3646794a4aaafd301cadb68254\",\"userId\":\"1386511018529320961\",\"platform\":\"ios\",\"signature\":\"4265d78ff26e70dd238578c28977e627\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619405015\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"8e7e87676d3a4393b85fc0595afad706\",\"deviceId\":\"8e7e87676d3a4393b85fc0595afad706\",\"userId\":\"1386511259267035138\",\"platform\":\"ios\",\"signature\":\"e4f67dc0ccf4316e81b5af724dc52389\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506670\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"0b5291f99be04fc99e7d81291c5dde2d\",\"deviceId\":\"0b5291f99be04fc99e7d81291c5dde2d\",\"userId\":\"1386937619689041921\",\"platform\":\"ios\",\"signature\":\"202d4975ffe8997bc6c5ea0cecc49650\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"132"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506618\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"f074dae0dc884b82b153bd2a8e2e3eaf\",\"deviceId\":\"f074dae0dc884b82b153bd2a8e2e3eaf\",\"userId\":\"1386937403060441090\",\"platform\":\"ios\",\"signature\":\"8b297c366dfb2dbf7c5bda43949a2ecb\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506756\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"031da7f3dde14229a38dc73cd8652c1b\",\"deviceId\":\"031da7f3dde14229a38dc73cd8652c1b\",\"userId\":\"1386937984525193217\",\"platform\":\"ios\",\"signature\":\"a2825408d58ead8942751e9f8345a53f\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506817\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"7b001d3bd43f42ebb46b7447b391d447\",\"deviceId\":\"7b001d3bd43f42ebb46b7447b391d447\",\"userId\":\"1386938240180350977\",\"platform\":\"ios\",\"signature\":\"24d1159a0cb991f58461b85ed77fe5b8\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506897\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"19101e592ee44e3a82d7f9aec9c69ef9\",\"deviceId\":\"19101e592ee44e3a82d7f9aec9c69ef9\",\"userId\":\"1386938576338481154\",\"platform\":\"ios\",\"signature\":\"72b285fabcc2ba2ec47ec4f6079a0792\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506959\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"fd70cd340f2b4dffbd6efe100978acce\",\"deviceId\":\"fd70cd340f2b4dffbd6efe100978acce\",\"userId\":\"1386938833821421570\",\"platform\":\"ios\",\"signature\":\"f291527b7e0af96a4f56b29813240dd6\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"132"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507037\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"89c42f84f2b84813b33f74d21fc73849\",\"deviceId\":\"89c42f84f2b84813b33f74d21fc73849\",\"userId\":\"1386939163054501889\",\"platform\":\"ios\",\"signature\":\"6761ea880d5e04fce02c126799df9c85\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507099\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"1699167703d04de69600a62210a4a580\",\"deviceId\":\"1699167703d04de69600a62210a4a580\",\"userId\":\"1386939422617563138\",\"platform\":\"ios\",\"signature\":\"c5abdc4affe03b2ce5371581a9ed12ab\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507171\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"88a2f68c3ef7487aaace0ff0d8a622fa\",\"deviceId\":\"88a2f68c3ef7487aaace0ff0d8a622fa\",\"userId\":\"1386939721760960514\",\"platform\":\"ios\",\"signature\":\"4cf49604df6e9be84f0193acb5f176f6\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507209\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"52fcdeda4a394e7a8abb05b79da12d89\",\"deviceId\":\"52fcdeda4a394e7a8abb05b79da12d89\",\"userId\":\"1386939883433160706\",\"platform\":\"ios\",\"signature\":\"5a98c642cb4dd2d85e1e14458414e666\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507265\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"a1f5e184fef44452bac3b3d827511b16\",\"deviceId\":\"a1f5e184fef44452bac3b3d827511b16\",\"userId\":\"1386940115182481410\",\"platform\":\"ios\",\"signature\":\"ac17035f794e0c606d6ccc3ded4a534e\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"oneline/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710103\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507334\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"a92b04f53d9e4034800ebe033207a2f7\",\"deviceId\":\"a92b04f53d9e4034800ebe033207a2f7\",\"userId\":\"1386940406404403202\",\"platform\":\"ios\",\"signature\":\"fe57e37b8a3833632a5a50647dc34d8d\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"}'],kzyhdArr = ['{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404132\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"c2ccb061dbec406598b52fda4f05cb8c\",\"deviceId\":\"c2ccb061dbec406598b52fda4f05cb8c\",\"userId\":\"1386507062864441345\",\"platform\":\"ios\",\"signature\":\"1f4352329ce6ef4ac9513ddd31ffdffc\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"129"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404645\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"55bd63a27b94417fa7453a52222ce646\",\"deviceId\":\"55bd63a27b94417fa7453a52222ce646\",\"userId\":\"1386509698821181441\",\"platform\":\"ios\",\"signature\":\"acc4554ed5701a84d73f7a3da1f94f78\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404737\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"974035a6035c4d3eb4296c6f99f01f50\",\"deviceId\":\"974035a6035c4d3eb4296c6f99f01f50\",\"userId\":\"1386510082633551874\",\"platform\":\"ios\",\"signature\":\"3938ae9ad6bab391e2511f193d66525f\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"132"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404874\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"def80fd374ea47efb33ecb9c2e9b6bc2\",\"deviceId\":\"def80fd374ea47efb33ecb9c2e9b6bc2\",\"userId\":\"1386510655815741441\",\"platform\":\"ios\",\"signature\":\"ed00a99aae019a448d06c68a12fc5d5c\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"128"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619404932\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"73a0da1e1db24f09a2999730ed0e8711\",\"deviceId\":\"73a0da1e1db24f09a2999730ed0e8711\",\"userId\":\"1386510899960541186\",\"platform\":\"ios\",\"signature\":\"c79a66823362ed52948e6c8f2ed81632\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"129"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619405012\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"083e05edc95d453296350d6ef16a62d8\",\"deviceId\":\"083e05edc95d453296350d6ef16a62d8\",\"userId\":\"1386511238977744897\",\"platform\":\"ios\",\"signature\":\"22e728cbb8c6325d7028b83a1bbf1875\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"128"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506372\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"4bc6cf90037840cb880125af08bd7bc4\",\"deviceId\":\"4bc6cf90037840cb880125af08bd7bc4\",\"userId\":\"1386935931732152322\",\"platform\":\"ios\",\"signature\":\"fab2ab5b880daa0b962c58cf96f0d01c\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"128"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506528\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"70f4b5731ecc4132926ba5ed3b00196e\",\"deviceId\":\"70f4b5731ecc4132926ba5ed3b00196e\",\"userId\":\"1386937023605952513\",\"platform\":\"ios\",\"signature\":\"2c42a739fe8f5dc865950399068e0230\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"129"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506719\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"4c5a850e658f4087bc47a6a6a027bd7a\",\"deviceId\":\"4c5a850e658f4087bc47a6a6a027bd7a\",\"userId\":\"1386937828291563522\",\"platform\":\"ios\",\"signature\":\"b79736e6f45478ace33e68de2df57718\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"128"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506794\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"64be7e68c68145febc47c5f95c7b8d6c\",\"deviceId\":\"64be7e68c68145febc47c5f95c7b8d6c\",\"userId\":\"1386938140150648834\",\"platform\":\"ios\",\"signature\":\"61744e689a4cbd275f5c69a5cf1d5523\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506854\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"21a640943a854bd0b2553243ce106b86\",\"deviceId\":\"21a640943a854bd0b2553243ce106b86\",\"userId\":\"1386938392869793794\",\"platform\":\"ios\",\"signature\":\"48a247ffde1643ff6a36925224c2974b\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"131"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619506938\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"9c3c555e65d84913984c0fa935771d8e\",\"deviceId\":\"9c3c555e65d84913984c0fa935771d8e\",\"userId\":\"1386938746605064193\",\"platform\":\"ios\",\"signature\":\"8a4fa1a1e7c3a22f80ccf085a9c5d3f5\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507000\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"e0ca2fbd84324475ab99460ea134909f\",\"deviceId\":\"e0ca2fbd84324475ab99460ea134909f\",\"userId\":\"1386939003312992258\",\"platform\":\"ios\",\"signature\":\"4860a2fb8dbff9f30deee2f7fde00331\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"129"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507077\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"06fafcc4acdd44f481c8d35c1f15fad1\",\"deviceId\":\"06fafcc4acdd44f481c8d35c1f15fad1\",\"userId\":\"1386939328984174594\",\"platform\":\"ios\",\"signature\":\"c19f702f339d0cb8d5f864f03e264de1\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"128"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507144\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"166b6f92d3e049139dc4b8d77bb2f1bc\",\"deviceId\":\"166b6f92d3e049139dc4b8d77bb2f1bc\",\"userId\":\"1386939610765905921\",\"platform\":\"ios\",\"signature\":\"c20b62216591a8218641ad9d9e4a915d\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507231\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"358769b8946d4e96b5d3dbeeaeb60318\",\"deviceId\":\"358769b8946d4e96b5d3dbeeaeb60318\",\"userId\":\"1386939976703340545\",\"platform\":\"ios\",\"signature\":\"09b9fdd22018949229f1c9f14e6830ae\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"128"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507299\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"656c5b120f3f426eaed4d2e03024939a\",\"deviceId\":\"656c5b120f3f426eaed4d2e03024939a\",\"userId\":\"1386940258845782018\",\"platform\":\"ios\",\"signature\":\"46e2a32623d06912c2f84af24b33a068\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"},
{"Accept-Encoding":"gzip, deflate, br","Accept":"*/*","Connection":"keep-alive","Content-Type":"application/json","Host":"ibestfanli.com","User-Agent":"zhuangyuan/1.9.6 (iPhone; iOS 14.3; Scale/3.00)","Authorization":"{\"prdId\":\"710302\",\"version\":\"1.3.23\",\"sysVersion\":\"14.3\",\"timestamp\":\"1619507359\",\"currentChannel\":61,\"sdk_version\":\"1.3.23\",\"sta_device_id\":\"14891df330df4875949662ab42dbe835\",\"deviceId\":\"14891df330df4875949662ab42dbe835\",\"userId\":\"1386940510645186562\",\"platform\":\"ios\",\"signature\":\"bc049b9d80b1540206cd2a50fee2928c\",\"activityChannel\":\"61\",\"versionCode\":89,\"appVersionCode\":196,\"phoneType\":\"iPhone10,2\",\"signatureI\":\"q118AH8W+tSB64jm0yucjjCSEYFV4z9L8g1ii3j1HPPKUol6uq2nstquPniGEfE9\"}","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Content-Length":"130"}'],qlpcount = ''
let times = Math.round(Date.now() / 1000)
let qlphd = $.getdata('qlphd')
let kzyhd = $.getdata('kzyhd')
let tx = 1  //数字改为1运行脚本可自动提现。联系手动运行。需要提现的时候再改
!(async () => {
  if (typeof $request !== "undefined") {
    await qlpck()
   
  } else {
    qlphdArr.push($.getdata('qlphd'))
    kzyhdArr.push($.getdata('kzyhd'))
    let qlpcount = ($.getval('qlpcount') || '1');
  for (let i = 2; i <= qlpcount; i++) {
    qlphdArr.push($.getdata(`qlphd${i}`))
    kzyhdArr.push($.getdata(`kzyhd${i}`))
  }
    console.log(`------------- 共${qlphdArr.length}个账号-------------\n`)
      for (let i = 0; i < qlphdArr.length; i++) {
        if (qlphdArr[i]) {
          qlphd = qlphdArr[i];
          kzyhd = kzyhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【考状元娶老婆${$.index}】`)
          await qlpyb();
          await qlphb();
          await kzyyb();
          await kzyhb();
if(tx == 1){
 await qlptx()
 await kzytx()
}
         
          
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//考状元娶老婆数据获取


function qlpck() {
   if ($request.url.indexOf("addCoin") > -1) {
  const qlphd = JSON.stringify($request.headers)
if(qlphd.indexOf("oneline") > -1){
if(qlphd)    $.setdata(qlphd,`qlphd${status}`)
$.log(qlphd)
   $.msg($.name,"",'娶老婆'+`${status}` +'数据获取成功！')
} else {
const kzyhd = JSON.stringify($request.headers)
if(kzyhd)    $.setdata(kzyhd,`kzyhd${status}`)
$.log(kzyhd)
   $.msg($.name,"",'考状元'+`${status}` +'数据获取成功！')

}
}
}

//娶老婆银币
function qlpyb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://ibestfanli.com/commerce_coin_service/api/user/coin/addCoin',
        headers : JSON.parse(qlphd),
        body : `{"data":{"sign":"1BsQIRa8PJVizidFaQuDnC7+uEP8Aph/MrSm6PhPfuUWBYty+T8/cdEVTu0IStzQfIGoGH1gMoZbVXPAnSEYfszdZwiSv2SspgxhCuPCJrE="}}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n娶老婆银币获取成功:${result.data.optCoin} 余额:${result.data.userCoin.coin}`)
        
} else {
       console.log('\n娶老婆银币获取失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//娶老婆红包
function qlphb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://ibestfanli.com/commerce_coin_service/api/user/coin/addCoin',
        headers : JSON.parse(qlphd),
        body : `{"data":{"sign":"aqA6DvHGVs\/glSKKYuV2VoeXxn+rxjzzT7NbKS2AQth6gQowNSR\/YZno+9KGTCup9vXXnuMMdPSZK7ubo2CTuBvd2ujaK+Oy4rdrl7OUV80="}}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n娶老婆红包获取成功:${result.data.optCoin} 余额:${result.data.userCoin.coin}`)

} else {
       console.log('\n娶老婆红包获取失败'+data)
        
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//考状元银币
function kzyyb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://ibestfanli.com/commerce_coin_service/api/user/coin/addCoin',
        headers : JSON.parse(kzyhd),
        body : `{"data":{"sign":"tVoBkKhGBNudyw2ovKc+yj01vGFov5M7jjyjpQlhRN7+BoxRdB+MiXtf05tnjlXw1OCAtirpsSEqM78r5nOp1sYdhUqzUOdKMMzXRncCAN8="}}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n考状元银币获取成功:${result.data.optCoin} 余额:${result.data.userCoin.coin}`)
       
} else {
       console.log('\n考状元银币获取失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//考状元红包
function kzyhb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://ibestfanli.com/commerce_coin_service/api/user/coin/addCoin',
        headers : JSON.parse(kzyhd),
        body : `{"data":{"sign":"tVoBkKhGBNudyw2ovKc+ytjA06SkUMiBWBQaONF9uko3TQRncJDKYnuVmBU58nhCDOlde9gaZP\/FEh9NYVLkr2wXP5marMkU\/DCjthHDT9I="}}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n考状元红包获取成功:${result.data.optCoin} 余额:${result.data.userCoin.coin}`)
       
} else {
       console.log('\n考状元红包获取失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//娶老婆提现
function qlptx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://commerce.ibestfanli.com/commerce_pay_service/api/pointsWithdraw/withdrawApply',
        headers : JSON.parse(qlphd),
        body : `{"handle":0,"data":{"amount":0,"withdrawScheme":0,"sysCode":"C","pointsWithdrawId":148},"shandle":0}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n娶老婆提现成功:${result.msg}`)
       
} else {
       console.log('\n娶老婆提现失败:'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//考状元提现
function kzytx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://commerce.ibestfanli.com/commerce_pay_service/api/pointsWithdraw/withdrawApply',
        headers : JSON.parse(kzyhd),
        body : `{"handle":0,"data":{"amount":0,"withdrawScheme":0,"sysCode":"710302303803","pointsWithdrawId":226},"shandle":0}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n考状元提现成功:${result.msg}`)
       
} else {
       console.log('\n考状元提现失败:'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
