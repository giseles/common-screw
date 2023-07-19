// @ts-nocheck

/**
 * @name 将菜单数据格式化
 * @param {Array} data 原始菜单
 * @param {Object} configList 包含的字段名映射关系
 * @example
 *  toMenuData(data)
 *  toMenuData(data,configList)
 */
export const toMenuData = (data, configList: LooseObject = baseConfig) => {
  let pathList = {} // 每个path的数据
  let fistPath = "" // 第一个有效路由

  const toMenu = (data, config = configList) => {
    const arr = [] // 菜单数据
    const { name, enName, icon, children, isHide } = config

    data?.forEach((_) => {
      const res = {}
      const isShow = !isHide(_)
      Object.keys(config).forEach((key) => {
        const realKey = config[key]
        let value = isString(realKey) ? _[realKey] : realKey(_)

        if (key === "path" && value) {
          if (!fistPath && isShow) {
            fistPath = value
          }
          const perm = []
          _[children]?.forEach(
            (item) => item[enName] && perm.push(item[enName])
          )

          pathList[value] = {
            perm,
            name: _[name],
            enName: _[enName],
            icon: _[icon]
          }
        }

        if (key === "children") {
          res[key] = toMenu(value)
        } else if (key !== "isHide") {
          res[key] = value
        }
      })
      isShow && arr.push(res)
    })
    return arr
  }

  const menuList = toMenu(data)
  return {
    menuList, // 菜单数据
    pathList, // 所有path的数据
    fistPath // 第一个有效路由
  }
}

// 菜单格式化 默认映射配置
const baseConfig = {
  name: "name",
  enName: "enName",
  icon: "icon",
  path: "path",
  children: "children",
  isHide: ({ url, isMenu }) => Boolean(url && !isMenu)
}
