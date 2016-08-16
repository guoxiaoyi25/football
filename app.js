// 引入spa类库
require("./lib/spa.min");
// 引入swiper类库
require("./lib/swiper-3.3.1.min");

//引入视图文件
require("./views/index");
require("./views/home");
require("./views/find");
require("./views/my");
require("./views/my-content");
require("./views/guide");
require("./views/detail");
require("./views/register");
//设置默认显示页面
SPA.config({
	indexView:"guide"
})