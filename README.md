# common-screw

> 前端业务代码工具库 

提供项目中常用的工具函数，比如`时间戳`、`格式的转换`、`数据类型判断`、`节流函数`等。如名字screw一样，做一个项目开发过程中的螺丝钉。


> 目的：高效率完成前端业务代码

将业务开发过程中的常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。


### 使用说明

```js
npm i common-screw

```

```js
yarn add common-screw

```


### 按需加载 支持 Tree Sharking

```js
import { randomBoolean, isArray, addDaysToDate } from 'common-screw'

 randomBoolean()  // false
 isArray(3)  // false
 isArray([1, 2])  // true
 addDaysToDate('2020-10-15', -10)  // 2020-10-05
 
```

### 模块加载
```js
import { CSBrowser, CSDate, CSDown, CSFormat, CSFunction, CSLang, CSRandom ,CSRegexp } from 'common-screw'

 CSDate.addDaysToDate('2021-10-15', -10)  // 2021-10-05
 CSRandom.randomBoolean()  // false
 
```


## :package:  API文档

### CSBrowser

#### &emsp;&emsp;[copyToClipboard](https://github.com/giseles/common-screw/blob/main/src/browser/copyToClipboard.ts) &emsp;&emsp;&emsp;复制到粘贴板 

#### &emsp;&emsp;[getUrlParam](https://github.com/giseles/common-screw/blob/main/src/browser/getUrlParam.ts) &emsp;&emsp;&emsp;获取url参数 

#### &emsp;&emsp;[storage](https://github.com/giseles/common-screw/blob/main/src/browser/storage.ts) &emsp;&emsp;&emsp;改造localStorage，可设置过期时间

#### &emsp;&emsp;[toUrlEncode](https://github.com/giseles/common-screw/blob/main/src/browser/toUrlEncode.ts) &emsp;&emsp;&emsp;对象转url参数 



### CSDate  

#### &emsp;&emsp;[addDaysToDate](https://github.com/giseles/common-screw/blob/main/src/date/addDaysToDate.ts) &emsp;&emsp;&emsp;日期加前后天数 

#### &emsp;&emsp;[addMinutesToDate](https://github.com/giseles/common-screw/blob/main/src/date/addMinutesToDate.ts) &emsp;&emsp;&emsp;加前后分钟数 

#### &emsp;&emsp;[dateToTimestamp](https://github.com/giseles/common-screw/blob/main/src/date/dateToTimestamp.ts) &emsp;&emsp;&emsp;日期转时间戳 

#### &emsp;&emsp;[diffTime](https://github.com/giseles/common-screw/blob/main/src/date/diffTime.ts) &emsp;&emsp;&emsp;日期间隔时间 

#### &emsp;&emsp;[timestampToDate](https://github.com/giseles/common-screw/blob/main/src/date/timestampToDate.ts) &emsp;&emsp;&emsp;时间戳转日期 

#### &emsp;&emsp;[timestampToDateNoTime](https://github.com/giseles/common-screw/blob/main/src/date/timestampToDateNoTime.ts) &emsp;&emsp;&emsp;时间戳转日期 无时间   



### CSDown

#### &emsp;&emsp;[downToCsv](https://github.com/giseles/common-screw/blob/main/src/down/downToCsv.ts) &emsp;&emsp;&emsp;下载csv文件 
#### &emsp;&emsp;[downToXlsx](https://github.com/giseles/common-screw/blob/main/src/down/downToXlsx.ts) &emsp;&emsp;&emsp;下载xlsx文件 
#### &emsp;&emsp;[downUrl](https://github.com/giseles/common-screw/blob/main/src/down/downUrl.ts) &emsp;&emsp;&emsp;通过url下载文件 



### CSFormat 

#### &emsp;&emsp;[addUnit](https://github.com/giseles/common-screw/blob/main/src/format/addUnit.ts) &emsp;&emsp;&emsp;数字后加单位 

#### &emsp;&emsp;[getObjKey](https://github.com/giseles/common-screw/blob/main/src/format/getObjKey.ts) &emsp;&emsp;&emsp;获取对象属性

#### &emsp;&emsp;[toEnum](https://github.com/giseles/common-screw/blob/main/src/format/toEnum.ts) &emsp;&emsp;&emsp;将数组 => 对象格式 

#### &emsp;&emsp;[toEnumArray](https://github.com/giseles/common-screw/blob/main/src/format/toEnumArray.ts) &emsp;&emsp;&emsp;将对象 => 数组格式  

#### &emsp;&emsp;[toFixed](https://github.com/giseles/common-screw/blob/main/src/format/toFixed.ts) &emsp;&emsp;&emsp;保留小数点（非四舍五入） 

#### &emsp;&emsp;[toString](https://github.com/giseles/common-screw/blob/main/src/format/toString.ts) &emsp;&emsp;&emsp;字符串转换



### CSFunction  

#### &emsp;&emsp;[debounce](https://github.com/giseles/common-screw/blob/main/src/function/debounce.ts) &emsp;&emsp;&emsp;防抖 

#### &emsp;&emsp;[deepClone](https://github.com/giseles/common-screw/blob/main/src/function/deepClone.ts) &emsp;&emsp;&emsp;深拷贝  

#### &emsp;&emsp;[throttle](https://github.com/giseles/common-screw/blob/main/src/function/throttle.ts) &emsp;&emsp;&emsp;节流   



### CSLang  

#### &emsp;&emsp;[isArray](https://github.com/giseles/common-screw/blob/main/src/lang/isArray.ts) &emsp;&emsp;&emsp;判断类型-数组 

#### &emsp;&emsp;[isBoolean](https://github.com/giseles/common-screw/blob/main/src/lang/isBoolean.ts) &emsp;&emsp;&emsp;判断类型-布尔值 

#### &emsp;&emsp;[isNil](https://github.com/giseles/common-screw/blob/main/src/lang/isNil.ts) &emsp;&emsp;&emsp;判断类型-是否为空 



### CSRandom   

#### &emsp;&emsp;[randomBoolean](https://github.com/giseles/common-screw/blob/main/src/random/randomBoolean.ts) &emsp;&emsp;&emsp;随机生成Boolean 

#### &emsp;&emsp;[randomNum](https://github.com/giseles/common-screw/blob/main/src/random/randomNum.ts) &emsp;&emsp;&emsp;生成指定范围[min, max]的随机数  


### CSRegexp  

#### &emsp;&emsp;[isAccountName](https://github.com/giseles/common-screw/blob/main/src/regexp/isAccountName.ts) &emsp;&emsp;&emsp;判断是否为用户名   

#### &emsp;&emsp;[isEmail](https://github.com/giseles/common-screw/blob/main/src/regexp/isEmail.ts) &emsp;&emsp;&emsp;判断是否为邮箱地址   

#### &emsp;&emsp;[isIdCard](https://github.com/giseles/common-screw/blob/main/src/regexp/isIdCard.ts) &emsp;&emsp;&emsp;判断是否为身份证号   

#### &emsp;&emsp;[isPassword](https://github.com/giseles/common-screw/blob/main/src/regexp/isPassword.ts) &emsp;&emsp;&emsp;判断是否为密码   

#### &emsp;&emsp;[isPhoneNum](https://github.com/giseles/common-screw/blob/main/src/regexp/isPhoneNum.ts) &emsp;&emsp;&emsp;判断是否为手机号  

#### &emsp;&emsp;[isUrl](https://github.com/giseles/common-screw/blob/main/src/regexp/isUrl.ts) &emsp;&emsp;&emsp;判断是否为URL地址  


### CSAntd  

#### &emsp;&emsp;[antdConfirm](https://github.com/giseles/common-screw/blob/main/src/antd/antdConfirm.ts) &emsp;&emsp;&emsp;统一返回信息提示框   

#### &emsp;&emsp;[antdMessage](https://github.com/giseles/common-screw/blob/main/src/antd/antdMessage.ts) &emsp;&emsp;&emsp;统一返回数据提示

### CSAxios

#### &emsp;&emsp;[Axios](https://github.com/giseles/common-screw/blob/main/src/axios/index.ts) &emsp;&emsp;&emsp;axios 发送网络请求

