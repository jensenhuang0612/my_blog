---
title: "V2RayN小白使用教程"
description: "本文从零开始介绍 V2RayN 的基础使用流程，涵盖软件安装、节点与订阅导入、代理模式选择及基本配置，帮助初次使用 V2RayN 的用户快速完成客户端配置"
date: 2026-09-30
category: "Networking"
tags:
  - vpn
---

# V2RayN是什么
V2RayN 是一款 Windows 上的网络代理软件，可以帮助我们连接代理服务器

简单来说，你可以把它理解成一个代理工具。我们把代理节点添加到 V2RayN 中，选择一个节点并开启代理后，电脑上的网络流量就可以通过这个节点进行连接

V2RayN 支持添加单个节点，也支持通过订阅链接一次性导入多个节点

如果你第一次使用 V2RayN，不需要了解复杂的网络知识。按照本文的步骤完成安装、添加节点并开启代理，就可以正常使用

# 安装V2RayN
<a href="https://github.com/2dust/v2rayN/releases" target="_blank" rel="noopener noreferrer">
  项目地址
</a>

点击Assets

![图片说明](/images/v2rayn-basic/01.png)

选择自己的系统版本，一般是V2RayN-Windows-64.zip

下载完对应系统版本之后，右键解压

![图片说明](/images/v2rayn-basic/02.png)

解压完后进入,双击打开v2rayN.exe

![图片说明](/images/v2rayn-basic/03.png)

# 添加节点

进入V2RayN后大概是这样的

![图片说明](/images/v2rayn-basic/04.png)

点击左上角配置项，选择一种方式导入节点
<a href="https://blog.164346.xyz/posts/freevpn/" target="_blank" rel="noopener noreferrer">
  （如果没有节点点我搭建免费机场）
</a>

![图片说明](/images/v2rayn-basic/05.png)

如果添加完后没有看到节点，点击订阅分组/更新全部订阅（不通过代理）

![图片说明](/images/v2rayn-basic/06.png)

选择一个节点，右键点击设为活动

![图片说明](/images/v2rayn-basic/07.png)

# 路由设置

点击上方设置/路由设置

![图片说明](/images/v2rayn-basic/08.png)

点击添加规则集

![图片说明](/images/v2rayn-basic/09.png)

复制下面这段代码

```JSON
[
  {
    "port": "443",
    "network": "udp",
    "outboundTag": "block",
    "enabled": true,
    "remarks": "UDP443阻断"
  },
  {
    "outboundTag": "direct",
    "ip": [
      "geoip:private"
    ],
    "domain": [
      "geosite:private"
    ],
    "enabled": true,
    "remarks": "局域网专用规则"
  },
  {
    "outboundTag": "block",
    "domain": [
      "geosite:category-ads-all"
    ],
    "enabled": true,
    "remarks": "广告拦截"
  },
  {
    "outboundTag": "direct",
    "ip": [
      "geoip:cn"
    ],
    "domain": [
      "geosite:cn"
    ],
    "enabled": true,
    "remarks": "国内直连"
  },
  {
    "port": "0-65535",
    "outboundTag": "proxy",
    "enabled": true,
    "remarks": "国外代理"
  }
]
```

<a href="https://github.com/n0de-sudo/Perfect-Rules/tree/main" target="_blank" rel="noopener noreferrer">
  原作者
</a>


点击从剪贴板中导入规则

![图片说明](/images/v2rayn-basic/10.png)

点击别名，命名

![图片说明](/images/v2rayn-basic/11.png)

命名完后点确定

![图片说明](/images/v2rayn-basic/12.png)

点x

![图片说明](/images/v2rayn-basic/13.png)

点击下方路由选项，选择刚刚创建的完美路由规则

![图片说明](/images/v2rayn-basic/14.png)

# 总结
到这里，你的V2RayN就已经设置完成了

现在可以愉快地上网冲浪了🌐

如果在搭建过程中遇到问题，或者实在不知道怎么操作，可以点击右上角的「联系」联系我

如果这篇教程对你有帮助，也可以点击右上角的「赞助」支持一下。球球了 🥺

![图片说明](/images/freevpn/please.png)