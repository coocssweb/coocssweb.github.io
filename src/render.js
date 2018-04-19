/**
 * 渲染
 * Created by 王佳欣 on 2018/4/15.
 */
import Layout from './layout';
import Home from './template/home.ejs';

export default Layout.render({
    title: '王佳欣的一些分享',
    keyword: '王佳欣的一些分享',
    description: '谢谢你访问我的开源项目',
    templates: [Home],
    siteId: 3300333
});
