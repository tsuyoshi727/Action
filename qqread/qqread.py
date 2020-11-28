import requests
import json
import time
import timeit
import os
import re
import urllib
from datetime import datetime
from dateutil import tz



result=''
djj_bark_cookie=''
djj_sever_jiang=''
qq_read_cookie=''



cooklist=[]
headers={'User-Agent': 'QQ/8.4.10.666 CFNetwork/978.0.7 Darwin/18.7.0','Content-Type':'application/json'}
def user_name():
   msg='【nickname】'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/user/init',headers=headers,timeout=10)

      userRes=json.loads(response.text)
      if(userRes['code']==0):
         msg+=f'''{userRes['data']['user']['nickName']}'''
      else:
       	msg+=f'''{userRes['msg']}'''
   except Exception as e:
      msg+=str(e)
      print(msg)
   loger(msg)
   
def user_coin():
   msg='【coin】'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/page?fromGuid=',headers=headers,timeout=10)
     # print(response.text)
      userRes=json.loads(response.text)
      if(userRes['code']==0):
         msg+=f'''💰{userRes['data']['user']['amount']} '''
      else:
       	msg+=f'''{userRes['msg']}'''
   except Exception as e:
      msg+=str(e)
      print(msg)
   loger(msg)
def user_readtime():
   msg='【readtime】'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/me/query/page',headers=headers,timeout=10)
      #print(response.text)
      userRes=json.loads(response.text)
      if(userRes['code']==0):
         msg+=f'''💰{userRes['data']['readTime']}  min  【Readmoney】{userRes['data']['balance']['allBalance']}bean'''
      else:
       	msg+=f'''{userRes['msg']}'''
   except Exception as e:
      msg+=str(e)
      print(msg)
   loger(msg)

def watch_video():
   msg='watch_video'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/watch_video',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)

def treasure_box():
   msg='treasure_box'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
def treasure_box_video():
   msg='treasure_box_video'
   time.sleep(31)
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box_video',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
def clock_in():
   msg='clock_in'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in/page',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
def clock_in_video():
   msg='clock_in_video'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in_video',headers=headers,timeout=10)
      print(response.text)
   except Exception as e:
      #msg+=str(e)
      print(msg)
def read_red_day():
   msg='read_red_day'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/read_book',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)

def read_time(long):
   msg='read_time'
   print('\n💎'+msg)
   try:
      response=requests.get(f'''https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds={long}''',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
      
def read_time_reward(long):
   msg='read_time_reward'
   print('\n💎'+msg)
   try:
      response=requests.get(f'''https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time_reward?seconds={long}''',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
def read_time_long():
   msg='read_time_long'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=1008&refer=pages%2Fbook-shelf%2Findex&bid=27693007&readTime=188447&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%222%22%3A%7B%22readTime%22%3A188447%2C%22pay_status%22%3A0%7D%7D%5D&sp=-1',headers=headers,timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
def readtimecheck():
   msg='readtimecheck\n'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/page/config?router=%2Fpages%2Fbook-read%2Findex&options=%7B%22bid%22%3A%2227693007%22%2C%22cid%22%3A%222%22%2C%22from%22%3A%22shelf%22%7D',headers=headers,timeout=10)
      print(response.text)
      rtm=json.loads(response.text)
      if(rtm['code']==0 and rtm['msg']=='ok'):
        msg+=f'''todayReadSeconds:{rtm['data']['pageParams']['todayReadSeconds']}'''
        for item in rtm['data']['pageParams']['readTimeRewardTask']:
            if item['enableFlag']==1 and item['doneFlag']==0:
              read_time_reward(item['seconds'])
        for item in rtm['data']['pageParams']['readTimeTask']:
            if item['enableFlag']==1 and item['doneFlag']==0:
              read_time(item['seconds'])
      else:
          	msg+='err'
      
   except Exception as e:
      msg+=str(e)
      print(msg)
      
      
def sign_in():
   msg='sign_in'
   print('\n💎'+msg)
   try:
      response=requests.post('https://mqqapi.reader.qq.com/mqq/sign_in/user',headers=headers,data={},timeout=10)
      #print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
def clock(func):
    def clocked(*args, **kwargs):
        t0 = timeit.default_timer()
        result = func(*args, **kwargs)
        elapsed = timeit.default_timer() - t0
        name = func.__name__
        arg_str = ', '.join(repr(arg) for arg in args)
        print('[🔔运行完毕用时%0.8fs] %s(%s) -> %r' % (elapsed, name, arg_str, result))
        return result
    return clocked
    
def notice(b,e):
    ll=False
    start_time = datetime.strptime(str(datetime.now().date())+b, '%Y-%m-%d%H:%M')
    end_time =  datetime.strptime(str(datetime.now().date())+e, '%Y-%m-%d%H:%M')
    now_time = datetime.now()
    if now_time > start_time and now_time<end_time:
       ll=True
    else:
    	ll=False
    return ll

	
def check(st,flag,list):
   result=''
   global djj_bark_cookie
   global djj_sever_jiang
   if "DJJ_BARK_COOKIE" in os.environ:
     djj_bark_cookie = os.environ["DJJ_BARK_COOKIE"]
   if "DJJ_SEVER_JIANG" in os.environ:
      djj_sever_jiang = os.environ["DJJ_SEVER_JIANG"]
   if flag in os.environ:
      st = os.environ[flag]
   if st:
       for line in st.split('\n'):
         if not line:
            continue 
         list.append(line.strip())
       return list
   else:
       print('DTask is over.')
       exit()
def all():
   check(qq_read_cookie,'QQ_READ_COOKIE',cooklist)
   index=0
   global result
   for item in cooklist:
       headers['Cookie']=item
       index+=1
       result+=f'''【Count】{index}'''
       user_name()
       user_coin()
       watch_video()
       user_readtime()
       clock_in()
       clock_in_video()
       read_time_long()
       treasure_box()
       treasure_box_video()
       read_red_day()
       readtimecheck()
       sign_in()
   if notice('4:00','5:00') or notice('22:00','23:00') or notice('13:00','14:00'):
      pushmsg('QQread',result)
   print('its over')





def pushmsg(title,txt,bflag=1,wflag=1):
   txt=urllib.parse.quote(txt)
   title=urllib.parse.quote(title)
   if bflag==1 and djj_bark_cookie.strip():
      print("\n【通知汇总】")
      purl = f'''https://api.day.app/{djj_bark_cookie}/{title}/{txt}'''
      response = requests.post(purl)
      #print(response.text)
   if wflag==1 and djj_sever_jiang.strip():
      print("\n【微信消息】")
      purl = f'''http://sc.ftqq.com/{djj_sever_jiang}.send'''
      headers={
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    }
      body=f'''text={txt})&desp={title}'''
      response = requests.post(purl,headers=headers,data=body)
    #print(response.text)
def loger(m):
   #print(m)
   global result
   result +=m
@clock
def start():
   
   print('Localtime',datetime.now(tz=tz.gettz('Asia/Shanghai')).strftime("%Y-%m-%d %H:%M:%S", ))
   all()
def main_handler(event, context):
    return start()
if __name__ == '__main__':
       start()
