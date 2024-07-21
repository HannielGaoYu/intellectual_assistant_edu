import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

export const Request = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default Request
