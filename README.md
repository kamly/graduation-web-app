
# 毕业设计-微信小程序-前端

## 编译环境

- node
- npm
- wepy

## 介绍

1. 基于 wepy 架构的小程序
2. 分离 接口
3. 使用 redux 数据状态管理
4. 新增 日志
5. 封装原生 获取信息，跳转，网络，提示
6. 组件化


## 结构目录

~~~
.
├── README.md                        README 文件
├── dist                             编译后文件，设置为小程序上传的目录 
├── node_modules                     第三方类库目录（npm 依赖库）
├── package-lock.json                第三方类库目录具体版本
├── package.json                     项目的package配置
│   
├── src                              代码编写的目录（该目录为使用WePY后的开发目录）
│   ├── app.wpy                      小程序配置项
│   ├── assets                       资源文件
│   │   ├── icons                    图标 （icon）
│   │   └── images                   背景 （尽量放在云端，减少代码量）
│   ├── components                   WePY组件目录
│   ├── config.js                    配置文件
│   ├── index.template.html          
│   ├── interfaces                   接口目录
│   │   ├── commentApi.js            回帖接口
│   │   ├── imageApi.js              图片接口
│   │   └── ....
│   │  
│   ├── mixins                       混合 
│   │  
│   ├── pages                        WePY页面目录（属于完整页面）
│   │   ├── browse.wpy               index页面
│   │   ├── fan.wpy
│   │   └── ....
│   │  
│   ├── redux                        redux目录
│   │   ├── comment                  回帖redux
│   │   │   ├── actions.js           actions定义      
│   │   │   └── comment.js           回帖操作
│   │   ├── image                    图片
│   │   └── ....
│   │  
│   ├── store.js                     store
│   │  
│   └── utils
│       ├── common.js                普通
│       ├── util.js                  汇总
│       ├── wxGetInfo.js             获取信息
│       ├── wxGoTo.js                跳转
│       ├── wxLog.js                 日志
│       ├── wxNet.js                 网络
│       ├── wxToast.js               提示
│       └── ....
│   
└── wepy.config.js                    wepy脚本
~~~

## 运行

```shell
# 注意，关闭es6转es5
vim src/config.js
wepy build --watch
```


