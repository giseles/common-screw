/**
 * @name 将菜单数据格式化
 * @param {Array} data 原始菜单
 * @param {Object} configList 包含的字段名映射关系
 * @example
 *  toMenuData(data)
 *  toMenuData(data,configList)
 */
export const toMenuData = (data: any, configList: any = baseConfig) => {
  const configKeys: any = Object.keys(configList)
  let pathHasPermissionList: any = {} // 路由所拥有功能权限
  let breadcrumbList: any = {} // 面包屑数据
  let ablePathList: any = [] // 可访问页面

  const toMenu = (
    data: any,
    config: any = configList,
    keys: any = configKeys
  ) =>
    data.map((item: any) => {
      return keys.reduce((res: any, key: any) => {
        const realKey = config[key]
        let value =
          typeof realKey === "function" ? realKey(item) : item[realKey]

        if (!!value || typeof value === "boolean") {
          if (key === "path") {
            !ablePathList.includes(value) && ablePathList.push(value)
          }
          if (key === "children") {
            res[key] = toMenu(value.filter(({ url }: any) => Boolean(url)))

            let urls: any = {}
            const path = item[config["path"]]
            const permissions = value.filter(({ url, isMenu }: any) => !isMenu)
            pathHasPermissionList[path] = permissions.map(
              ({ enName, url }: any) => {
                urls[enName] = url
                return enName
              }
            )
            breadcrumbList[path] = {
              name: item.name,
              icon: item.number
            }
          } else res[key] = value
        }
        return res
      }, {})
    })

  const getFistPath = (menu: any) => {
    let path = "/"
    for (let i = 0; i < menu.length; i++) {
      const item = menu[i]
      if (item.path) {
        path = item.path
        break
      }
    }
    return path
  }

  const menuList = toMenu(data)
  return {
    menuList, // 菜单数据
    pathHasPermissionList, // 路由所拥有功能权限
    breadcrumbList, // 面包屑数据
    ablePathList, // 可访问页面
    fistPath: getFistPath(menuList) // 第一个有效路由
  }
}

// 菜单格式化 默认映射配置
const baseConfig: any = {
  name: "name",
  icon: "number",
  path: "url",
  children: "children",
  isHide: ({ url, isMenu }: any) => Boolean(url && !isMenu)
}
