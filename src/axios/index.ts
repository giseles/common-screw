// @ts-ignore
import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { antdMessage, storage } from ".."

/**
 *
 * @name  axios发送网络请求
 * @param  {Object} config Axios 配置 = defaultConfig
 * @example
 * Axios.post('url',{data})           ---- POST请求
 * Axios.get('url',{data})            ---- GET请求
 * const apiList = async (data: any) => axios.post('url', { data })
 */
export const Axios = (config: Object = defaultConfig) => {
  return new MyAxios({ ...defaultConfig, ...config })
}

// 默认配置
const defaultConfig = {
  successCode: 8001, //请求成功code码
  axiosConfig: { timeout: 5000 }, //超时时间
  exceptTokenUrls: [], //无需token的url
  noNeedCodeUrls: [], //无需code成功码的url
  errorMessage: antdMessage, //错误提示
  token: () => storage.getItem("token"), //token
  showTime: true //显示请求耗时
}

// 状态码错误信息
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
}

type Method = "GET" | "POST" | "PUT" | "DELETE"

interface IOptions extends AxiosRequestConfig {
  method: Method
}

class MyAxios {
  constructor(props: any) {
    // @ts-ignore
    this.props = props
    this.init()
  }

  init() {
    // @ts-ignore
    const { axiosConfig } = this.props
    //  设置全局参数，如响应时间，请求前缀等
    Object.keys(axiosConfig).forEach((key) => {
      // @ts-ignore
      axios.defaults[key] = axiosConfig[key]
    })
    this.setInterceptors()
  }

  // Axios 拦截器设置
  setInterceptors() {
    let start = 0
    // @ts-ignore
    const { exceptTokenUrls, token, showTime } = this.props
    axios.interceptors.request.use(
      (config: any) => {
        // 发送请求前
        const { url = "" } = config
        if (showTime) {
          console.log(`#### ${url} 开始请求...`)
        }

        if (!exceptTokenUrls.includes(url)) {
          config.headers.Authorization =
            typeof token === "function" ? token() : token
        }
        start = +new Date()
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    axios.interceptors.response.use(
      (response: any) => {
        // 状态码2XX 发送请求后
        const { url } = response.config
        if (showTime) {
          console.log(`#### ${url} 请求完成！`)
          console.log(`#### ${url} 本次请求耗时：`, +new Date() - start, "ms")
        }
        return response
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }

  /**
   * 请求方式: post get put delete
   * @param {String} url
   * @param {AxiosRequestConfig} options
   */
  post = (url: string, options?: AxiosRequestConfig) =>
    this.begin(url, { ...options, method: "POST" })

  get = (url: string, options?: AxiosRequestConfig) =>
    this.begin(url, { ...options, method: "GET" })

  put = (url: string, options?: AxiosRequestConfig) =>
    this.begin(url, { ...options, method: "PUT" })

  delete = (url: string, options?: AxiosRequestConfig) =>
    this.begin(url, { ...options, method: "DELETE" })

  /**
   * 开始请求URL
   * @param {String} url
   * @param {IOptions} options
   */
  begin = (url: string, options: IOptions): Promise<AxiosResponse> =>
    this.toRequest(url, options)
      .then(this.handleSuccess)
      .catch(this.handleError)

  /**
   * 发送Axios请求
   * @param {String} url
   * @param {IOptions} options
   */
  toRequest<T = any, R = AxiosResponse<T>>(
    url: string,
    options: IOptions
  ): Promise<R> {
    // @ts-ignore
    const { method, data, ...option } = options
    switch (method) {
      case "GET":
        return axios.get(url, { params: data })
      case "DELETE":
        return axios.delete(url, { params: data })
      case "PUT":
        return axios.put(url, data)
      case "POST":
        return axios.post(url, data, option)
      default:
        return axios.get(url, { params: data })
    }
  }

  /**
   * 请求成功回调
   * @param {AxiosResponse} res
   * @returns {data: any, message: any, code: string}
   */
  handleSuccess = (res: AxiosResponse<any>) => {
    const { data } = res
    const url: string = res.config.url || ""
    // @ts-ignore
    const { noNeedCodeUrls, errorMessage, successCode } = this.props
    if (Number(data.code) === successCode || noNeedCodeUrls.includes(url)) {
      return data
    } else {
      errorMessage(data)
      return Promise.reject({ status: data.code, message: data.msg })
    }
  }

  /**
   * 请求失败回调
   * @param {Any} err
   */
  handleError = (err: any) => {
    let status = ""
    let statusText = ""
    if (err.response) {
      // 请求已发出，服务器用状态代码响应 非 2XX
      status = err.response.status
      // @ts-ignore
      statusText = codeMessage[status] || err.response.statusText
    } else if (err.request) {
      // 提出了请求，但没有收到任何答复
      if (err.message.startsWith("timeout")) {
        status = "503"
        statusText = "网络请求超时，请稍后再试！"
      } else {
        status = "500"
        statusText = "服务器发生错误"
      }
    } else {
      status = err.status
      statusText = err.message
    }
    return Promise.reject({
      name: "Error",
      message: statusText,
      status: Number(status)
    })
  }
}
