# SpringBoot图书馆管理系统

## 1、技术栈

java8 + SpringBoot + thymeleaf + MySQL8.0.17 + mybatis-plus + maven + Xadmin 实现图书馆管理系统


本idea项目的编码为utf8，请自行更改相关配置

> Idea配置：File–>Settings–>File Encodings–>Project Encoding
>
> Windows下默认的是GBK,tomcat配置界面：添加虚拟机启动参数：-Dfile.encoding=UTF-8
>
> 控制台乱码 修改idea中的vm参数 添加一条配置信息：-Dfile.encoding=UTF-8
>
> tomcat全设置为utf8

## 2、功能说明

> 系统要实现如下的基本管理功能：
>
> （1）用户分为两类：管理员，一般用户。
>
> （2）提供用户注册和用户登录验证功能；其中一个登录用户的信息有：登录用户名，登录密码。
>
> （3）管理员可以实现对注册用户的管理（查询、删除、密码修改）、用户的借书申请的确定和还书操作，并实现对图书的创建、查询、修改和删除等有关的操作
>
> （4）一般用户，只能查询图书，并进行借书操作（提出借书申请），每个用户最多借阅8本，即当目前借书已经是8本，则不能再借书了，只有还书后，才可以再借阅。



## 3、系统功能模块划分

系统大致模块如下：


![系统功能模块](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/6f91dde2-fdba-48fa-87b4-9359e1a13269.png)



错误页面跳转模块：当用户访问不存在的页面，会跳到本系统默认的404页面，当执行错误操作导致服务器500错误时，也会跳到本系统配套的500页面。

权限管理：利用拦截器实现，达到用户无法越权访问页面及发送请求的目的

登录验证模块：与数据库中所存在的用户进行匹配，如果不存在，则返回错误信息。登录成功后会跳到对应的首页

管理员模块：个人的信息修改；读者的增删改查；书籍的增删改查；管理员的增删改查以及书籍借阅和书籍归还操作。

读者模块：个人的信息修改，图书馆库存查询，个人借阅记录查询。

### 1、E-R模型

E-R模型如图所示:


![E-R模型](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/301a81f2-db57-4fff-abc6-2d0e60daad41.png)



### 2、数据库设计

数据库设计如图所示：


![数据库设计](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/f25fc87c-9a8a-4089-88dd-bf00395be05d.png)



## 4、详细设计

### 1、前台设计

#### 1.1登录界面

登录包括注册和登录部分。当用户未输入时，只能点击前往注册，点击登录会弹窗提示“未输入必填项以及未完成滑块认证”。

![](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20240322160052683.png)



点击前往注册。可以看到注册页面。再注册界面中，加入了空值、用户ID、邮箱、电话等关键值的判断。保证用户输入的字符，符合注册要求后在向后端发送注册请求。


![注册页面](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/f2248603-b750-4767-9c22-014e538499c5.png)


登录后，系统会根据用户ID自动判别用户类别，如果是r开头的，为读者登录，如果是m开头的则为管理员。若登录出错会返回错误信息


![image](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/8b9edafe-a4f1-4b43-8991-939b71087528.png)


#### 1.2 读者模块

读者模块分为三小块。右边为导航栏，包括两个功能，分别是查询馆藏书籍和查询自己的借阅记录。右边为刷新，登出和编辑个人信息功能。


![读者模块首页](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/60187a59-746f-4418-b630-f2c244a64cf2.png)



#### 1.2.1 编辑个人信息

该页面做了密码验证功能，如果密码输入错误将无法修改。


![编辑个人信息](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/2e9412e0-0f81-4d1a-a8d9-54995327e399.png)



#### 1.2.2 查询馆藏书籍

该页面会显示书籍的基本信息。也可以根据书名进行模糊查询。但是进行特别处理。不满足借阅条件的将无法显示“去借阅”按钮。


![馆藏目录](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/94b1df12-0809-4336-bc46-fd997ca17aef.png)


如果当前用户借书量达到8本了，将会提示“每个用户最多可借阅8本书籍，请尽快前往图书馆归还！”

#### 1.2.3 查询个人借阅记录

查询中，可以根据全部记录和未归还记录作为条件进行查询。


![查询个人借阅记录](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/4590e7f7-8c6e-4d27-be21-abeff56191a6.png)


点击“归还”按钮会提示图书馆开放时间。

### 2 后台设计

管理员后台功能颇多。除了个人信息更改，还包括用户管理，书籍管理，借阅管理三大模块。

#### 1、用户管理

用户管理分为管理员和读者模块。管理员包括增删改和模糊查询操作。


![管理员管理](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/af243c7d-9bcf-4c53-ae4a-c3d308a03e1b.png)



![读者管理](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/e2d7f2f3-831c-4646-ab17-ddc9c25180b6.png)


读者管理包括增删改模糊查询外还包括查询未归还记录和查询全部记录，下面展示查询未归还记录


![查询未归还记录](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/3743c6d0-c467-4277-a6e2-941415db9292.png)


#### 2、书籍管理

书籍管理大致包括书籍的增删改，以及查询某本书的借阅记录和未归还记录


![书籍管理](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/c4d4aff9-815f-4926-8ef1-903542da6bff.png)



编辑界面中，对库存总量进行了安全安全判断，使得库存永远大于等于借出数量。并且说定了借出数量，让还书操作在借阅管理中进行。


![编辑书籍](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/0dc3bd49-9aee-46c8-ac1b-812a4528fd29.png)


#### 3、借阅记录管理

借阅记录中可以进行借阅者，书籍详情，未归还书籍的查询；书籍归还操作以及添加借阅信息。归还操作中，满足书籍库存大于等于借出量以及借出量不为0的条件下，即可归还成功。


![借阅记录管理](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/0cd986d4-cec6-4922-af0e-9b75f9531d74.png)


添加借阅信息时。如果选中的读者以达到最大借书量，提示借书不成功。


![借书失败](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/0236ef4c-f9aa-4e03-a2d9-b4c58b525dc8.png)




### 3、安全设计

安全方面中，主要对不同角色的访问进行限制。

未登录用户只可访问登录和注册页面，如果访问其他角色的页面将会重定向到登录首页。

管理员不可访问reader目录下的方法和页面。访问后会自动重定向到管理员的首页。

读者不可访问admin目录下的方法和页面。访问后会自动重定向到读者的首页。

当输入不存在的页面，以及当服务器发生错误时，页面会跳转对应的错误页面。


![404页面](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/e12663ad-5d3d-4142-8649-13d648f38b0f.png)

## 5、源码获取

源码获取以及更多详情请联系

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/WeChat1.png" style="width: 18%;height: 80%;" referrerpolicy="no-referrer" alt="微信">
