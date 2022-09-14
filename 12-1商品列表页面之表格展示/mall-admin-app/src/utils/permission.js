/**
 * 存储的是 角色对应的权限名称
 */
const roleToRoute = {
  // 角色是顾客
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
  ],
  // 角色是管理员
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'Category',
    },
  ],
};

/**
 * 获取路由信息
 * @param {String} role  角色
 * @param {Array} routes  路由信息 是用户传过来的
 */
export default function getMenuRoutes(role, routes) {
  // console.log(role, routes);

  // 取到每个角色里面的属性的属性名
  const allowRouteName = roleToRoute[role].map((item) => item.name);
  // 传过来的路由信息 进行过滤
  const resultRoute = routes.filter((r) => {
    const obj = r;
    if (allowRouteName.indexOf(obj.name) !== -1) { // 说明传过来的路由是包含的
      const childRoute = obj.children;
      // 说明传过来路由的子路由也是符合条件的 是包含的
      obj.children = childRoute.filter((c) => allowRouteName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoute;
}
