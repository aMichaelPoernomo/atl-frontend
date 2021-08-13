import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const BASE_URL = 'API_PATH'

/* devblock:start */
var mock = new MockAdapter(axios)
mock.onGet('/getUser').reply(200, {
  name: 'default user',
})
/* devblock:end */

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export default axiosInstance
