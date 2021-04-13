/*
软件名称:云扫码 微信扫描二维码打开
更新时间：2021-03-31 @肥皂
脚本说明：云扫码自动阅读
脚本为自动完成云扫码的阅读任务
每日收益1元左右，可多号撸。提现秒到
可以多个阅读平台同时跑脚本，如番茄看看和微客众智

任务打开二维码地址 https://raw.githubusercontent.com/age174/-/main/3B7C4F94-B961-4690-8DF7-B27998789124.png
微信扫描打开，保存临时码，再去扫码获取数据

可以先点阅读任务旁边的关注任务,关注三个公众号先提现三毛再说

本脚本以学习为主！
首次运行脚本，会提示获取数据
去云扫码，首页自动获取数据,
如果mitm没填写获取不到任务,可以到mitm界面添加一个为*的主机名
获取成功数据之后请删除*

TG电报群: https://t.me/hahaha8028

3.1更新增加是否有阅读任务的判断
加入自动兑换和自动提现，当前金币大于等于3000会自动提现，请自行去获取提现数据，方法，进入云扫码，成功提现一次获取数据成功
解决多账号问题，可以多账号撸了
3.2更新,新增判断，如果提示当前任务已结束脚本会尝试继续执行不会终止循环，key提交提示失败也会尝试重新执行，增加了提现成功的通知
3.8更新，修复因官方更新无法提交key和领取任务奖励的问题
3.9更新 修复云扫码官方更新无法自动阅读的问题

3.18更新，新增判断云扫码每日首次运行脚本是否手动阅读过两篇文章，如果阅读过两篇文章脚本继续执行任务，否则结束

3.26更新，云扫码多账号更新优化，加入多账号并发执行，获取ck方式改为和番茄看看一样的方式，不用手动选择抓包账号几，加入通知开关和首次阅读开关限制，自定义提现金额，比例为1:10000，最低提现金额为0.3元，即填写提现金额最少填写3000，注意需要重新更改重写的链接，请在下方获取替换以前的重写，该版本为@ztxtop大佬提交的pr。感谢大佬

3.31更新,修复官方域名更换无法正常跑脚本的问题，请更换一下重写重新抓包
PS:
一般两篇文章过后还能阅读那么当天一般都能跑满任务的，需要手动阅读两篇的原因是和番茄看看一样，前两篇文章是调用微信接口鉴权的(这个没有办法解决)，鉴权通过可以继续阅读，不通过则限制阅读(如果你不手动阅读鉴权,直接跑脚本很大几率直接就限制了)，云扫码和番茄看看鉴权通过的话是不会有任务冲突的，一般情况下这两个平台手动阅读了两篇文章都能跑满全部任务。阅读三兄弟的微客众智则不需要手动阅读可以直接跑脚本(可惜ck过期太快，但是不会限制，我的ck最长坚持了四天，有些人就只能坚持一天，建议微客众智的重写保持开启状态。)

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


云扫码
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#云扫码
15 12,14,16,20,22 * * * https://raw.githubusercontent.com/age174/-/main/ysm.js, tag=云扫码, img-url=https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png, enabled=true


[rewrite_local]
#云扫码
^http://.+?[^/]/yunonline/v\d+/redirect/(?!undefined) url script-request-header https://raw.githubusercontent.com/age174/-/main/ysm.js



#loon
^http://.+?[^/]/yunonline/v\d+/redirect/(?!undefined) script-path=https://raw.githubusercontent.com/age174/-/main/ysm.js, requires-body=true, timeout=10, tag=云扫码



#surge

云扫码 = type=http-request,pattern=^http://.+?[^/]/yunonline/v\d+/redirect/(?!undefined),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/ysm.js,script-update-interval=0


*/

const $ = new Env('云扫码')
let ysm = [
  {
    "openid": "oksnzwf-sY27XEheW941PVCw-qyI",
    "domain": "http://aaa.saomayun.cn/yunonline/v1/",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN",
    "secret": "eyJpdiI6IlFXTTU1NW9ZeGtPQitteCtITDg0UFE9PSIsInZhbHVlIjoidTlnTWphS2c4TzJrZmJ5MTZXeDhoajBUXC9yd1ZzMHFScnhXWDExbFk1WkdcL25YUnZCTnlvc2xmV0N4aWVzbDM0dk55dWx0V0VxMDE0UTlDYmRUZnUxakp3S0JFZlZoZ0tTXC95MjN6TWpMN2pwcENqNmpieXZMaHB2S1R5VE16TStCWWRpNk91SWtsVmJCNTlnNXp1Mjk0MnRMU244YlREdlgwclEzM3U5QWViZU9ZcGticG5tS2drR0NVSDhXMDlGVGVuREwreTlDU0tsOE5UV3FwXC9lMlJpWGprSklyWTFuZWF0VmxTSVpFc3A5dGFYTk1UNUNcL3F4SDYzdzRZbWtLQml6NDhwd2pWSHlicjJGaGtoNXJmQmY5Q2wydG5NSlJ2SFRIS0ZmNXR2SnhqaHVZWm03NU0xbzkwWjNib1hsSEpiUVVvaWQ2UXI3OXdvckY1eXY0dmFTT3Nkczh5Skw3V0VRSWltcWUzUFcyZVFTUTlyRnhVUTl6TTRGQUJmcktUS1lTUzZqTEI5MzI5dHdyc2RnOCtRPT0iLCJtYWMiOiJkN2YwNWViYjMwZmI3N2VmMDI5YjJkNGExZmI5M2FkOWYxMTk2YjM4NTBmZDFiNTVmN2IzYzQ0NGM0NTQ5MTY4In0%3D",
    "txbody": "openid=oksnzwf-sY27XEheW941PVCw-qyI&request_id=d4b52873e3e39f1bc129c02c433c65a1&ua=1"
  },
  {
    "openid": "oksnzwRllOfixYuUkb2JnXE9qySM",
    "domain": "http://aaa.saomayun.cn/yunonline/v1/",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN",
    "secret": "eyJpdiI6InZMRXlWRXFqbU9laHR0bGozWDQweEE9PSIsInZhbHVlIjoiQllranlRKzFYelhnSjNlbkFQcjdBaGNONVl1YTBsaEFvUVVDa3JmQ1pIRldKdFpDMHplTmFGTDBkQjNcLzRTanp1TFVvYm5vcmE4MWtMTFFmaFVCZG9kS2ZrVEpMXC9IeTZNcVJUMjIxb3A1UXJ6TUo5dGRQWmVtM0dQSUdZQzNJSGJEaEpucnozZHA0MDlvaWtWM3doeGhZZXZuOGV0VThYU0ZzdUtQMmJ6VmpYNE1oTllHNUp0QlhiXC9hMWpFenVTWkM1a0x2cjZPdHpUaGo1Uk1ZZmNzNVVlVEM3TUZKZ01wS052K1BNY0duWXljNTB5OGVleHNpelY5RG5Yc2YrUHZJMFlSaG5Id3JcL0MxNnRkVWRRTm5ZUGJheWVFT1o2aEhVbk41ZGRJSXlIXC9VRGx1MnRSZkRTRFN6VjFTWkpHNm5vS1IzU1U0VUxGc2tramdPTlVIZkdhTjM0SmhcL05melNuSmJLeitSbENZTk9HUXd5aWJWZjNuQVl2QUdEUEJuMGZVUUZFN3IxQkFqbElEZXAwWnJEUT09IiwibWFjIjoiMjk1NWRhY2QyNjNjNmQyMzk1YTY1Y2IwYzZlYjcxYzUxNWFhZjliNjFlZjRkZGJjYTQ0M2JmYjQwYWUyNGNkZSJ9",
    "txbody": "openid=oksnzwRllOfixYuUkb2JnXE9qySM&request_id=b997d38ed4e1c8913c457cf9bb5d1ab7&ua=1"
  },
  {
    "openid": "oksnzwbGbGGw_nlsnF0YUvvA4IWY",
    "domain": "http://aaa.saomayun.cn/yunonline/v1/",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN",
    "secret": "eyJpdiI6InpoYUxKQW5HQ3ZGWkwrQlljNGgweEE9PSIsInZhbHVlIjoiTk1taFA4UUpTT1FuK2FIbzhZR0oyajJLS0x0RW05bEU2QUg4cU1XZjFESVhoSE5Cbk1qTlEwcHZPRE5zUjZ3UFFiZmg5alYwZzdqdmh2QllcL0RvbE5ndjhHYUU3NWJMVG9lN2NtUUxwbDk5SG1cLzdZSUFnQkdDQjBxQkh6Tzc4MlVGMVNxT0w0Wmk1XC9sVm1nN0dKR2xjbnV3Wk03cEhYaEZ3YnlZZzJNTzNsT2NFWHBqbUhOdDRHZlloU3puVExvMEI2Tml0ZUxRdGJseG9hd0I5cVI1UlFcL2JId1hpOFY0U29NejZZSzZXRm93OUVlZEE4Z1wvaGRmUXBCQ01XOUFQd05XU2k4VzhWQytLUVdDK1I4WFdcL0d3SkI2R3l0dXBiWlpLM3dZVE9OelpvazNaOWVldkxXcEljQUs0M1RBZUh4c09mcjkwWTlTY0hERzFHYUt4dTNBNktjam1DNEhFcU50VTBtcjRHTXBXMHNiMkJuNExHK0pRd0VHM3Bwbys5ODBcL21xMmp1YWhNc3ZWYWlNZjZLbnc9PSIsIm1hYyI6ImJhMWNiMGExNjRiZWJjOTYyYTIyZTgwMjY0YzE5YmM1NmU2NjU2MTEwNTgzYWM2NGU2NzAyYjY5NGY4ZWU3ZGQifQ%3D%3D",
    "txbody": "openid=oksnzwbGbGGw_nlsnF0YUvvA4IWY&request_id=1c7d6c6659bb8653fd5c8dff0b44f7bd&ua=1"
  },
  {
    "openid": "oksnzwYC-SDweCfVrBOO6da4srXA",
    "domain": "http://aaa.saomayun.cn/yunonline/v1/",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN",
    "secret": "eyJpdiI6IitaYUFLSFRVR3hBdnFEQUp1a2c2TEE9PSIsInZhbHVlIjoid0JhenZNQjZvWHBYT0dRbUl0aDR5WDNvRFwvT3FxK20ySTZiZUNwK2x2dFFYSnp0RXVjV2R3QklPdTFqTkY4RTk3RTVEalZcL3pCMytBUmVxYnhjRHJUcUI5a1lOYTd1YzdRS2tjeHQyeldTSk04V21kS1VIbFhpSENvQ2dncHFCXC9kQjBjeG5kY3pIb1ZEWmVyZmNPY05lMVV2MWY3bTNtb0luOGFKZ0tybXBpdXVwelZmT2t2dUlWWW9pRk05ejdhVWUyckc3MEJpb1ZVeU5Dc1pXU1liZnM5QVlNRFJMN3BaK1ljMUhTSXhVWGJaVjBcLzRRRklQNEl6bWs2WU1kM2UxUXpZbjNiS255YnZVZmkzanB4WlwvdHRFWkZDR25QYW9oQlA4ZzdpajV2bzhGZUJzQ2M1RkxTRktcLzhsR0Q4V2hwK0NRb01YMWNld0RlY2J0UklMZmZLUFpDTEJmRDRpUDNwS1U0NTJpUlwvQ2RVZ1gwNnBHbSs1V0R4cTFwdzVFbWZWcDRqenE2XC91Ukd1S2l6ZlFTa3RnPT0iLCJtYWMiOiIxYWJkY2E0NTA1MDIzYzNmMTFkMDNmMzc0ODQ4YTcyMmM2NzYyMjBjYWNlM2U2ZDYwZWE3N2E3NmYxMGM4MTkzIn0%3D",
    "txbody": "openid=oksnzwYC-SDweCfVrBOO6da4srXA&request_id=771c95de6ff84f3e617a862056e47158&ua=1"
  },
  {
    "openid": "oksnzweCRuI17eBn8E2O6G9L2dtE",
    "domain": "http://aaa.saomayun.cn/yunonline/v1/",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN",
    "secret": "eyJpdiI6IlVMcXhzXC9seG05Y28xN0RLN0hxa0N3PT0iLCJ2YWx1ZSI6ImJoVVVYUmN1aXJSVWhoMVpQRmpMdEZtMlE4MzBOWFpuV1wvYVJiUk9qYzM0YWRiTFRcLzlnNnhRaVdHRzhabm5pbHdlZHJJTzljN2VMSWlRU2hjS0ZYcGd4bzlKT1wvMVJjS0FBOUJEVmNqbFpxUGJaZ3ZsSU9yMjBrOUtcL244TVVCSXk1czQxQmpXRHFBUDZQNytFS1NxZXpCVmdiZVlCSWtzQURYdXBoQVwvZHdhXC9FVURWQVB3ZmdPNFhrSmZ0UzlQNFd5ZW45OCtGblpETnpBNXdYbkxES1llQmI3R0FQcloxQVYzcVhZc3ZkTXEwNEtjRkJEd2dReEh1ZEZ1bEcxS0xNY1lrUVBQUGVORjh3MlRoZE16V0daZm5MV0ZmbURHWHVOWkVYQjBZSFwvbDk5VWNNS2ZIYnhsNUp6bHJhSDlETHR5K3ZWU2FMQ0FXR2ZzbEgwWDhpTjk0WlIzOGg2dFRNXC9hdG5rVFBNNW5NNE1lVTU4bzVHXC9KZnNtcVdpemdOSXVQd1BZXC9LdytZMm9iR2ZcL0diNUlRdz09IiwibWFjIjoiYTljYjU1NTliMjhjNjQ1MGU1ZjliZjAzYzMxOTZmNzg4ZDYzOGQyZTQyNDVmYzkyMWM4NzdiNWYzNmZkMjc4YyJ9",
    "txbody": "openid=oksnzweCRuI17eBn8E2O6G9L2dtE&request_id=6b509f90552c6b831f40485664a8a36f&ua=1"
  },
  {
    "openid": "oksnzwc_Dh6DIC1b7M0N6z6q-upU",
    "domain": "http://aaa.saomayun.cn/yunonline/v1/",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN",
    "secret": "eyJpdiI6IktmeFwvdUZBRlY3emY0NUF5QVBodnZnPT0iLCJ2YWx1ZSI6IjhGYXQ0TE40YmhVVEJibWcwR2d0VmdcL215bnY4TzNKUzNOZXRsRms4V3lLcFpnXC9cL202cmJ4d2Z4MHo3Z3hhM2RXRlQyRnBzM3FrWFZhbGdVd05NVXplZjZXZUN0RXR1allKMkh4ckRvRkhoanltcVFsNml0bVJyMTRQbXRPOTNpcWIzanp6WmFkNFwvNEhFUHBuVkdKRkVjMzJjUFlDZlgrMFo5VU42UHhtUDFMWHZxQ3NnVjRRcWJUaUxDVlNwZ0ZPMEZzUkVNakNTbU0yM1JLdDNBeTAyTzczdlVRcGc1ZE9ZVWM2cVBYZEtxcnlZWDZhN29PVEJMc20rRll2WFNPMVM1VlcwbHJvb05ob0JxREtDODRETG14SFZMNUVDSE94SU9GQmdFOEJCMEZUT0FNN2M5RkxYZkhUMVp5MWVERk1MbHJ2RGxpbU9ZMEZZekVtditDXC8xbzI0a1wvSDUzRTJYbFlieURTTDFCaW9kUGxHSEdkNkFscGZCdEFVSnZxS2NMaTE5N1dqWisycUFYeHQwTWt5Y1E9PSIsIm1hYyI6IjU3YmI1ZDFjZmE1ZDU1NTM4NmEyN2U0NTczZjRlZDdlYmIxZDEwMzUzMDZjODNmOTZhZjVhYmYzZmI5ZDNiMzIifQ%3D%3D",
    "txbody": "openid=oksnzwc_Dh6DIC1b7M0N6z6q-upU&request_id=71ece7dc56387da3e14c8bc007b4a950&ua=1"
  }
]
let needNotice = $.getval('ysmNotice') == 'true'
let ysmBanfirstTask = $.getval('ysmBanfirstTask') == 'true' // 禁止脚本执行首个任务，避免每日脚本跑首次任务导致微信限制
let ysmBanhalfTask = $.getval('ysmBanhalfTask') == 'true' // 脚本执行完第50个任务时退出任务，再手动阅读2篇避免出现微信限制
let ysmtxAmt = ($.getval('ysmtxAmt') || '3000') - 0  // 此处修改提现金额，0.3元等于3000币，默认不提现
ysmtxAmt = ysmtxAmt > 3000 ? (parseInt(ysmtxAmt / 1000) * 1000) : ysmtxAmt > 0 ? 3000 : 0
let concurrency = ($.getval('ysmConcurrency') || '2') - 0 // 并发执行任务的账号数，默单账号循环执行
concurrency = concurrency < 1 ? 1 : concurrency

const execNo = [] // 允许执行的账号，为空时不限制，指定时，按照指定的来判断处理，例如：[1,3]

const moveData = 0 

const baseHeaders = {
  "Accept": "application/json, text/javascript, */*; q=0.01",
  "Accept-Encoding": "gzip, deflate",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "Connection": "keep-alive",
  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
  "X-Requested-With": "XMLHttpRequest"
}

!(async () => {
  if (typeof $request !== "undefined") {
    await ysmck()
  } else if (moveData) {
    await ysmckMove()
  } else {
    // 获取分组执行账号数据
    let execAcList = getExecAcList()
    let msgInfo = []
    for (let arr of execAcList) {
      let allAc = arr.map(ac => ac.no).join(', ')
      $.log(`\n=======================================\n开始【${$.name}账号：${allAc}】`)
      let rtList = await Promise.all(arr.map((ac, i) => execTask(ac, i)))
      msgInfo.push(rtList.map(ac => `【账号${ac.no}】\n当前余额：${ac.last_gold}币\n今日奖励：${ac.day_gold}\n已阅读数：${ac.day_read}\n待阅读数：${ac.remain_read}${ac.extMsg?'\n\t'+ac.extMsg:''}`).join('\n\n'))
    }
    if (msgInfo.length <= 0) {
      msgInfo.push(`暂无账号数据，请重新扫码进入云扫码首页抓取数据`)
    }
    if (needNotice) {
      $.msg($.name, '', msgInfo.join('\n\n'))
    } else {
      $.log('\n======== [脚本运行完毕,打印日志结果] ========\n' + msgInfo.join('\n\n'))
    }
  }
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

function execTask(ac, i) {
  return new Promise(async resolve => {
    try {
      await $.wait(i * 50)
      await ysm4(ac)
      if ((!execNo || (execNo.length == 0 || execNo.includes(ac.no))) && ac.remain_read && !(ac.day_read < 2 && ysmBanfirstTask) && !(ysmBanhalfTask && ac.day_read == 50)) {
        $.log(`😄账号${ac.no}今日已读${ac.day_read}次，今日待读${ac.remain_read}次，即将阅读`)
        await $.wait((i + 1) * 600)
        let flag = 0
        let count = 1
        let allowErrorCount = 3
        do {
          flag = await ysm1(ac, count++)
          if (flag < 0) {
            allowErrorCount += flag - 0
          }
        } while (flag && allowErrorCount > 0)
      } else {
        $.log(`😓账号${ac.no}今日已读${ac.day_read}次，今日待读${ac.remain_read}次，跳过阅读`)
      }
      if (ac.txbody && ysmtxAmt >= 3000 && ac.last_gold >= ysmtxAmt) {
        ac.extMsg = await ysmdh(ac, ysmtxAmt)
      }
      await ysmSignInfo(ac)
    } catch (e) {
      $.logErr(`账号${ac.no} 循环执行任务出现异常: ${e}`)
    } finally {
      resolve(ac)
    }
  })
}

function getExecAcList() {
  let acList = ysm.filter(o => o.openid).map((o, i) => {
    let data = o.domain.match(/^(https?:\/\/(.+?))\//)
    let acHeader = {
      "Origin": data[1],
      "Host": data[2],
      "User-Agent": o.ua,
      "Referer": `${o.domain}redirect/${o.secret}?openid=${o.openid}&redirect_flag=read`
    }
    return {
      no: i + 1,
      last_gold: 0,
      day_gold: 0,
      remain_read: 0,
      day_read: 0,
      openid: o.openid,
      domain: o.domain,
      headers: {
        ...baseHeaders,
        ...acHeader
      },
      body: `secret=${o.secret}&type=read`,
      txbody: o.txbody
    }
  })
  let execAcList = []
  let len = acList.length
  // 计算分组后每组账号个数
  let slot = len % concurrency == 0 ? len / concurrency : parseInt(len / concurrency) + 1
  slot = Math.ceil(len / (slot || 1))
  let idx = -1
  acList.forEach((o, i) => {
    if (i % slot == 0) {
      idx++
    }
    if (execAcList[idx]) {
      execAcList[idx].push(o)
    } else {
      execAcList[idx] = [o]
    }
  })
  $.log(`云扫码当前设置的提现金额为: ${ysmtxAmt / 10000} 元`, `----------- 共${len}个账号分${execAcList.length}组去执行 -----------`)
  return execAcList
}

//云扫码数据获取
async function ysmck() {
  const url = $request.url
  let newAc = ''
  if (url.match(/https?:\/\/.+?[^/]\/yunonline\/v\d+\/redirect\/(?!undefined)/) || url.match(/https?:\/\/.+?[^/]\/yunonline\/v\d+\/exchange\?/)) {
    let hd = {...$request.headers}
    let data = (hd['Referer'] || hd['referer'] || '').match(/^https?:\/\/.+?[^/]\/yunonline\/v\d+\/redirect\/(?!undefined).+$/)
    let no = ysm.length
    newAc = await updateAndGetCk(no + 1, data && data[0] || url, hd)
    if (newAc) {
      let status = 1
      for (let i = 0, len = no; i < len; i++) {
        let ac = ysm[i] || {}
        if (ac.openid) {
          if (ac.openid == newAc.openid) {
            no = i
            status = 0
            break
          }
        } else if (no == len) {
          no = i
        }
      }
      ysm[no] = newAc
      $.setdata(JSON.stringify(ysm, null, 2), 'ysm')
      $.msg($.name, "", `云扫码[账号${no+1}] ${status?'新增':'更新'}数据成功！`)
    }
  }
  if (!newAc) {
    $.log($.name, `无法从请求中获取到用户账号数据，跳过处理`)
  }
}

function updateAndGetCk(no, url, headers) {
  return new Promise(resolve => {
    let opts = {url}
    $.get(opts, async (err, resp, html) => {
      let rtAc = ''
      try {
        if (err) {
          $.logErr(`❌ 账号${no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          let openid = (html.match(/openid="(.+?)"/) || ['', ''])[1]
          let domain = (html.match(/domain="(https?:\/\/.+?)"/) || ['', ''])[1]
          let secret = (html.match(/secret="(.+)";/) || ['', ''])[1]
          let txbody = (html.match(/https?:.+?\/exchange\?(openid=.+?&request_id=.+?)(&|")/) || ['', ''])[1]
          let ua = headers['User-Agent'] || headers['user-agent']
          if (txbody) {
            var Android = String(ua.match(/android/i)).toLowerCase() == "android"
            var iOS = String(ua.match(/iphone/i)).toLowerCase() == "iphone" || String(ua.match(/ipad/i)).toLowerCase() == "ipad"
            txbody += `&ua=${iOS ? 1 : Android ? 2 : 0}`
          }
          if (domain && ua && secret) {
            rtAc = {openid, domain, ua, secret, txbody}
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(rtAc)
      }
    })
  })
}

async function ysmckMove() {
  let ysmArr = []
  let ysmcount = ($.getval('ysmcount') || '1') - 0
  for (let i = 1; i <= ysmcount; i++) {
    let hd = $.getjson(`ysmhd${i>1?i:''}`)
    if (hd) {
      let data = (hd['Referer'] || hd['referer'] || '').match(/^https?:\/\/.+?[^/]\/yunonline\/v\d+\/redirect\/(?!undefined).+$/)
      if (data) {
        let newAc = await updateAndGetCk(i, data[0], hd)
        if (newAc) {
          ysmArr.push(newAc)
        }
      }
    }
  }
  if (ysmArr.length > 0) {
    let existsId = ysm.map(o => o.openid)
    for (let ac of ysmArr) {
      if (!existsId.includes(ac.openid)) {
        ysm.push(ac)
        existsId.push(ac.openid)
      }
    }
    $.setdata(JSON.stringify(ysm, null, 2), 'ysm')
    $.msg($.name, "", `迁移账号数：${ysmArr.length}\n合计账号数：${ysm.length}！`)
  } else {
    $.log('无待迁移的旧数据')
  }
}

// 金币信息查询
function ysm4(ac) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}gold?openid=${ac.openid}&time=${Date.parse(new Date())}`,
      headers: ac.headers
    }
    $.get(opts, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          const result = JSON.parse(data)
          if (result.errcode == 0 && result.data) {
            ac.last_gold = (result.data.last_gold || 0) - 0
            ac.day_read = (result.data.day_read || 0) - 0
            ac.day_gold = (result.data.day_gold || 0) - 0
            ac.remain_read = (result.data.remain_read || 0) - 0
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve()
      }
    })
  })
}

//云扫码领取
function ysm3(ac, time) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}add_gold`,
      headers: ac.headers,
      body: `openid=${ac.openid||''}&time=${time}`
    }
    $.post(opts, (err, resp, data) => {
      let f = -1
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          const result = JSON.parse(data)
          if (result.errcode == 0 && result.data) {
            ac.last_gold = (result.data.last_gold || 0) - 0
            ac.day_read = (result.data.day_read || 0) - 0
            ac.day_gold = (result.data.day_gold || 0) - 0
            ac.remain_read = (result.data.remain_read || 0) - 0
            if (ac.remain_read <= 0) {
              f = 0
              $.msg(`${$.name}: 账号${ac.no}`, '', `今日阅读已达上限，请明日继续`)
            } else if (ysmBanhalfTask && ac.day_read == 50) {
              f = 0
              $.msg(`${$.name}: 账号${ac.no}`, '', `今日已阅读50篇，请手动阅读2篇再跑脚本`)
            } else {
              f = 1
            }
            $.log(`🌝账号${ac.no}：本次奖励：${result.data.gold}, 当前余额: ${ac.last_gold}`, `今日阅读次数: ${ac.day_read}, 今日阅读奖励: ${ac.day_gold}`, `今日剩余阅读次数：${ac.remain_read}`)
          } else {
            $.logErr(`🚫账号${ac.no}：${result.msg}，跳过本次循环\n${data}`)
            if (result.errcode == 405 || result.msg == '来晚了，当前任务已结束') {
              f = 1
            }
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(f)
      }
    })
  })
}

//云扫码提交     
function ysm2(ac, jumpLink, flag = 0) {
  return new Promise((resolve) => {
    let opts = {url: jumpLink}
    if (flag) {
      opts['headers'] = ac.headers
    }
    $.get(opts, async (err, resp, data) => {
      let rtObj = ''
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          rtObj = $.toObj(data, {})
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(rtObj)
      }
    })
  })
}

//云扫码key
function ysm1(ac, count) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}task`,
      headers: ac.headers,
      body: ac.body
    }
    $.post(opts, async (err, resp, data) => {
      let f = -1
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else if (count > 55) {
          f = -3
          $.msg($.name, `账号${ac.no}`, `本阶段阅读循环次数过多，可能接口返回异常数据导致脚本死循环了，终止脚本运行`)
        } else {
          const result = JSON.parse(data)
          if (result.errcode == 0 && result.data && result.data.link) {
            $.log(`\n🌝账号${ac.no}获取key回执成功，第${count}次跳转观看💦`)
            let jumpLink = (result.data.link.match(/redirect_uri=(.*?)(&|#wechat_redirect|$)/) || ['', result.data.link])[1]
            let jumpObj = await ysm2(ac, unescape(jumpLink) + '?/', 1)
            if (jumpObj) {
              let time = parseInt(Math.random() * (11 - 9 + 1) + 9, 10)
              $.log(`🌝账号${ac.no}等待${time}秒后提交本次观看任务`)
              await $.wait(time * 1000)
              f = await ysm3(ac, time)
            } else {
              $.log(`🌝账号${ac.no}jump接口请求失败，重新执行阅读任务`)
              await $.wait(1500)
            }
          } else if (data == '{"errcode":0,"msg":"success"}') {
            $.logErr(`🚫账号${ac.no}：🧼来自肥皂的提示:当前没有任务啊,手动进云扫码看看是不是一直显示更新中,别问肥皂什么原因啦～`)
            f = -3
          } else {
            $.logErr(`🚫账号${ac.no}：获取key回执失败：${(result.data && result.data.msg) || result.msg}`)
            if (((result.data && result.data.msg) || result.msg) == '请一个小时后再来') {
              f = -3
            } else {
              f = -2
              await $.wait(1500)
            }
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(f)
      }
    })
  })
}


//云扫码兑换
function ysmdh(ac, gold) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}user_gold`,
      headers: ac.headers,
      body: `${ac.txbody.match(/(openid=.*?)ua/)[1]}gold=${gold}`
    }
    $.post(opts, async (err, resp, data) => {
      let msg = ''
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          const result = JSON.parse(data)
          if (result.errcode == 0) {
            $.log(`🌝云扫码账号${ac.no} 提现兑换成功：兑换金额${result.data.money}元，前去微信提现'`)
            await $.wait(1000)
            msg = await ysmwx(ac, result.data.money)
          } else {
            msg = `🚫微信提现兑换失败：${result.msg}`
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(msg)
      }
    })
  })
}


//云扫码提现
function ysmwx(ac, money) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}withdraw`,
      headers: ac.headers,
      body: ac.txbody
    }
    $.post(opts, async (err, resp, data) => {
      let msg = ''
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          const result = JSON.parse(data)
          if (result.errcode == 0) {
            $.log(`🌝云扫码账号${ac.no} 微信提现成功：${result.msg}`)
            msg = `已成功提现至微信${money}元`
          } else {
            msg = `🚫微信提现回执失败：${result.msg}`
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(msg)
      }
    })
  })
}

function ysmSignInfo(ac) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}sign_info?time=${Math.floor(new Date().getTime()/1000)}000&openid=${ac.openid||''}`,
      headers: ac.headers
    }
    $.get(opts, async (err, resp, data) => {
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          let rtObj = $.toObj(data, {})
          if (rtObj.errcode == 0 && rtObj.data && rtObj.data.signIn == false) {
            // 未签到，执行签到获取奖励
            let msg = await ysmSign(ac)
            if (msg) {
              ac.extMsg = ac.extMsg ? ac.extMsg + '\n\t' + msg : msg
            }
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve()
      }
    })
  })
}

function ysmSign(ac) {
  return new Promise((resolve) => {
    let opts = {
      url: `${ac.domain}sign_in`,
      headers: ac.headers,
      body: `openid=${ac.openid||''}`
    }
    $.post(opts, async (err, resp, data) => {
      let msg = ''
      try {
        if (err) {
          $.logErr(`❌ 账号${ac.no} API请求失败，请检查网络后重试\n url: ${opts.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          const result = JSON.parse(data)
          if (result.errcode == 0) {
            $.log(`🌝云扫码账号${ac.no} 签到成功`)
            msg = `签到成功：奖励${result.data.gold}币`
          } else {
            msg = `签到失败：${result.msg}`
          }
        }
      } catch (e) {
        $.logErr(`======== 账号 ${ac.no} ========\nurl: ${opts.url}\nerror:${e}\ndata: ${resp && resp.body}`)
      } finally {
        resolve(msg)
      }
    })
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}