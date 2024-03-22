---
title: 迎新管理系统
---


### 项目介绍

主要基于目前市面上的迎新管理系统来开发，核心功能包括： 学校风格历史、信息采集、学校内容发布、迎新管理、财务缴费、报告单打印等功能。

角色分为三个：

- 超级管理员：全部信息
- 教师：分管所属的学生信息
  - 查看学生信息
  - 财务缴费信息
  - 到站信息
- 学生：学生报到流程
  - 安全教育
  - 信息采集
  - 到站登记
  - 财务缴费
  - 报告单打印



### 项目功能

- 用户管理：用户是系统操作者，该功能主要完成系统用户配置。

- 部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。

- 岗位管理：配置系统用户所属担任职务。

- 菜单管理：配置系统菜单，操作权限，按钮权限标识等。

- 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。

- 字典管理：对系统中经常使用的一些较为固定的数据进行维护。

- 参数管理：对系统动态配置常用参数。

- 通知公告：系统通知公告信息发布维护。

  

以上是若依带有的，减少了很多不必要的开发。

- 迎新管理：学生信息、到站登记、财务缴费
- 内容管理：内容管理、分类专栏、banner管理



### 技术栈

> 前端技术栈 ES6、vue、vuex、vue-router、vue-cli、axios、element-ui
>
> 后端技术栈 SpringBoot、MyBatis、Spring Security、Jwt、Redis



### 环境搭建

> JDK >= 1.8 (推荐1.8版本) 
>
> Mysql >= 5.7.0 (推荐5.7版本) 
>
> Redis >= 3.0 
>
> Maven >= 3.0 
>
> Node >= 12 



### 必要配置

- 修改数据库连接，编辑 resources 目录下的 application-druid.yml

  ```yaml
  # 数据源配置
  spring:
      datasource:
          type: com.alibaba.druid.pool.DruidDataSource
          driverClassName: com.mysql.cj.jdbc.Driver
          druid:
              # 主库数据源
              master:
                  url: 数据库连接路径
                  username: 用户名
                  password: 密码
  ```

- 修改服务器配置， 编辑resources目录下的application.yml 

  ```yaml
  # 开发环境配置
  server:
    # 服务器的HTTP端口，默认为80
    port: 端口
    servlet:
      # 应用的访问路径
      context-path: /应用路径
  spring:
    # redis 配置
    redis:
      # 地址
      host: localhost
      # 端口，默认为6379
      port: 6379
      # 数据库索引
      database: 0
      # 密码
      password: 123456
  ```

  

- 创建数据库

  > 创建数据库，并导入数据脚本 ，在`sql`目录下



### 后端运行

#### 运行

> 运行java目录下的*Application.java



### 前端运行

```
# 进入项目目录
cd ruoyi-ui

# 安装依赖
npm install

# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
```



### 项目预览

![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/1c6a417c92724864814b2ede539d88f5.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/068c4aa8d12946ccbf84c3d54d6ed219.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/57b86dbc86da4f94ae6381b7473a2666.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/4d8645358681443896c385407751e75b.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/e42e8a28f7c348bfafb66630688b4b9c.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/167da7c097ca48b9a323249f28aba5bd.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/564b8c63bbe146dd9a5664f65e957c09.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/cb530099fe2a44f1ad11a2bf520df65c.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/4bc5c7d1d16d4f7788eadf5322c78fae.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/ffe8a8a6059943429d69c3bb34c9bf03.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/7c9cb39917a04b31ba896a82a09c96b5.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/8ca95784f846441a8d0622ce0614ff4f.png)
![在这里插入图片描述](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/67d673262b32409b8d8213e8725b3191.png)


### 源码获取

文章篇幅有限，很多界面功能图片没贴，整体而言，这个项目是一套整体功能比较完善的迎新系统，页面比较精美。

无论是拿来做项目或者二次开发，都是非常不错的，所以推荐给大家，值得收藏和推荐给朋友哦~

最后，想学习这个项目的可以查看项目地址：

原文地址：[小熊学Java](https://mp.weixin.qq.com/s/3WPEvA63xpACmY999uBXtQ)

关注公众号：小熊学Java即可领取哦！！！