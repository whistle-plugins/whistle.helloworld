# whistle.helloworld
whistle插件编写的例子，主要功能是显示转发到helloworld的http、https、websocket请求，其它whistle插件的开发方式可以参考该例子 `whistle.helloworld`。

# Usage

1. 先安装启动whistle(v0.8.0+)：[https://github.com/avwo/whistle](https://github.com/avwo/whistle#whistle)
2. 安装 whistel.helloworld 插件

		$ npm install whistle.helloworld -g
	
3. 安装启动whistle，及安装完whistle.helloworld插件后，打开[whistle配置页面](http://local.whistlejs.com/)上方菜单栏的 **About** 菜单按钮，可以看到whistle已经自动加载好helloworld的插件

	![about](https://raw.githubusercontent.com/whistle-plugins/whistle.helloworld/master/htdocs/img/helloworld-about.png)
	
4. 通过配置whistle规则，转发请求到helloworld插件


	![rule](https://raw.githubusercontent.com/whistle-plugins/whistle.helloworld/master/htdocs/img/helloworld-rule.png)


5. 查看转发到helloworld插件的请求

	先[启用HTTPS](https://github.com/avwo/whistle/wiki/%E5%90%AF%E7%94%A8HTTPS)，分别访问如下url：
	
	- [http://www.qq.com/](http://www.qq.com/)
	- [https://www.ifeng.com/](https://www.ifeng.com/)
	- [https://www.websocket.org/echo.html](https://www.websocket.org/echo.html)，并分别点击页面的 `Use secure WebSocket (TLS)`复选框 及 `Connect`按钮


	![plugin](https://raw.githubusercontent.com/whistle-plugins/whistle.helloworld/master/htdocs/img/helloworld-plugin.png)




	

	

	
