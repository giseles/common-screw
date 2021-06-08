# common-screw
提供项目中常用的工具函数，比如时间戳、格式的转换、数据类型判断等。如名字screw一样，做一个项目开发过程中的螺丝钉。



### 使用说明

- npm i common-screw 
- 或 yarn add common-screw


### 模块加载
```js
import { CSBrowser, CSDate, CSDown, CSFormat, CSFunction, CSLang, CSRandom ,CSRegexp } from 'common-screw'

 CSDate.addDaysToDate('2020-10-15', -10)
 CSRandom.randomBoolean()
 
```

### 按需加载

```js
import { randomBoolean, isArray, addDaysToDate } from 'common-screw'

 randomBoolean()
 isArray(3)
 isArray([1, 2])
 addDaysToDate('2020-10-15', -10)
 
```

## :package:  API文档

### 浏览器

#### &emsp;&emsp;[copyToClipboard](https://github.com/giseles/common-screw/blob/main/src/date/addDaysToDate.ts) &emsp;&emsp;日期加前后天数

### Date  

#### &emsp;&emsp;[addDaysToDate][addDaysToDate]&emsp;&emsp;日期加前后天数 
