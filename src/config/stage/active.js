const activeRouter = {
  route: null,
  name: null,
  title: '活动管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/active/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '发布活动',
      type: 'view',
      name: 'activeAdd',
      route: '/active/add',
      filePath: 'views/active/activeAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default activeRouter
