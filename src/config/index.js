/*
 * @Author: your name
 * @Date: 2020-03-05 10:27:46
 * @LastEditTime: 2020-03-05 10:41:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lin-cms-vue\src\config\index.js
 */
const Config = {
  //  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: 'http://localhost:5000/',
  baseURL: 'http://192.168.3.11:5000',
  stagnateTime: 1 * 60 * 60 * 1000, // 无操作停滞时间  默认1小时
  openAutoJumpOut: true, // 是否开启无操作跳出
  notLoginRoute: ['login'], // 无需登录即可访问的路由 name,
  sideBarLevel: 3, // 侧边栏层级限制, 3表示三级, 可设置 2 和 3
  showSidebarSearch: true, // 默认打开侧边栏搜索
  defaultRoute: '/about', // 默认打开的路由
}

export default Config
