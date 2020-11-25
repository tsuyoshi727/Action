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
   except Exception as e:
      msg+=str(e)
      print(msg)

def treasure_box():
   msg='treasure_box'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box',headers=headers,timeout=10)
 
   except Exception as e:
      msg+=str(e)
      print(msg)
def treasure_box_video():
   msg='treasure_box_video'
   time.sleep(31)
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box_video',headers=headers,timeout=10)

   except Exception as e:
      msg+=str(e)
      print(msg)
def clock_in():
   msg='clock_in'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in/page',headers=headers,timeout=10)

   except Exception as e:
      msg+=str(e)
      print(msg)
def clock_in_video():
   msg='clock_in_video'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in_video',headers=headers,timeout=10)

   except Exception as e:
      msg+=str(e)
      print(msg)
def read_red_day():
   msg='read_red_day'
   print('\n💎'+msg)
   try:
      response=requests.get('https://mqqapi.reader.qq.com/mqq/red_packet/user/read_book',headers=headers,timeout=10)

   except Exception as e:
      msg+=str(e)
      print(msg)

def read_time(long):
   msg='read_time'
   print('\n💎'+msg)
   try:
      response=requests.get(f'''https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds={long}''',headers=headers,timeout=10)
      print(response.text)
   except Exception as e:
      msg+=str(e)
      print(msg)
      
def read_time_reward(long):
   msg='read_time_reward'
   print('\n💎'+msg)
   try:
      response=requests.get(f'''https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time_reward?seconds={long}''',headers=headers,timeout=10)
      print(response.text)
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
       treasure_box()
       treasure_box_video()
       read_red_day()
       read_time(360)
       read_time_reward(360)
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
   print(m)
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
