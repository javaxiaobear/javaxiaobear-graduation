---
title: 实习管理系统
---

**摘  要**     实习是对大学毕业生毕业前所学知识的一种检验，是大学教育中非常重要的一部分,对学生有着不可替代的作用。在以往的实习、毕业设计管理过程中，学校停留于QQ群发送企业招聘信息以及手工发送实习、毕业设计等相关通知，这样会存在有企业信息过多导致很多同学没发看到之前的招聘信息等问题，学校对学生毕业实习及毕业设计等指导也大多数采用手工管理方式。本文从高校毕业设计与实习管理中存在的问题入手，改变了传统的实习管理、实习考核以及论文选题方式，运用Spring Boot技术、Spring Security技术、MyBatis技术、Vue等技术开发了一套实习管理系统，对学生实习和毕业设计的过程进行科学有效地管理,实现了毕业设计和实习过程的跟踪动态管理、信息化管理。

**研究意义**
它可以提高学校实习指导老师的工作效率，将一些传统的纸张报告、日志等纸质材料全部在网上进行，减少传递的过程，通过实时性传递，节省老师与学生之间的时间，提高工作效率

## 模块设计
### 这里的模块是指大的菜单模块:
- 系统管理：主要包括用户管理、角色管理、菜单管理、院系管理、岗位管理、字典管理、参数管理以及通知公告等基本功能的添加、删除、修改、查询管理。其中通知公告可以针对学院、专业或者班级来发布消息。
- 我的OA：主要包括我的待办、发布任务以及定时任务等功能。老师的待办消息可以在我的待办中查看；发布任务模块，发布学院的实习或论文任务之后需分配指导老师。定时任务暂时未用到。
- 指导老师：学校指导老师和实习指导老师
- 统计分析：实习分析和论文分析
- 企业管理：主要包括公司管理、岗位管理、招聘信息三部分。公司管理和岗位管理主要是学院老师提供一些实习单位以及岗位信息；招聘信息是学院老师提供信息的汇总，可以直观的查询自己想去的公司或岗位等。
- 实习管理：分为实习申请、实习列表、实习单位变更三部分。学生可以通过学校发布的公司信息或者自主实习的单位进行实习申请，待审核通过之后就可实习了，若实习期未满，而找到更好的实习单位可申请变更实习单位。
- 实习考核：分为实习周报、实习总结、实习鉴定表和实习成绩四个部分。
- 权益管理：分为实习协议和工资待遇两部分。
- 论文管理：分为论文题库、开题报告提交、任务下达、中期检查、论文答辩五个模块。
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b50ccfdb1b2405f895e555882afcde1.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Y2O5oC755qEeGlhb2JlYXI=,size_17,color_FFFFFF,t_70,g_se,x_16)
## 预览
![在这里插入图片描述](https://img-blog.csdnimg.cn/039cdab1c955458191d73cba096385cd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Y2O5oC755qEeGlhb2JlYXI=,size_18,color_FFFFFF,t_70,g_se,x_16)

登录之后的首页，会有待办事项，统计数据分析，以及最新的动态，通知
![在这里插入图片描述](https://img-blog.csdnimg.cn/f123d3cee6164a33808d49ad14833be8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Y2O5oC755qEeGlhb2JlYXI=,size_18,color_FFFFFF,t_70,g_se,x_16)

实习周记的填写，提交
![在这里插入图片描述](https://img-blog.csdnimg.cn/70102838b2b544b183b6f8e7c6a9d93c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Y2O5oC755qEeGlhb2JlYXI=,size_18,color_FFFFFF,t_70,g_se,x_16)

实习统计分析页面，会根据学年，学院，专业，班级进行统计分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/40a9f4a6661542e0a4bb9f3d8d5580d4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Y2O5oC755qEeGlhb2JlYXI=,size_18,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/74f5b97839be4b4aaebacd2378b10f80.png)

同时，各种毕设文件也有
![在这里插入图片描述](https://img-blog.csdnimg.cn/bdc03bc8434c4bbf9329a5666a8bcb69.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Y2O5oC755qEeGlhb2JlYXI=,size_20,color_FFFFFF,t_70,g_se,x_16)
### 源码获取
文章篇幅有限，很多界面功能图片没贴，整体而言，这个项目是一套整体功能比较完善的实习管理系统，页面比较精美。
无论是拿来做项目或者二次开发，都是非常不错的，所以推荐给大家，值得收藏和推荐给朋友哦~



wv：**小熊学Java** 回复实习管理系统


