import axios from 'axios'
let baseurl
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'dev':
    baseurl = 'https://dev-audi-api.svwsx.cn/api-wap'
    break
  case 'qa':
    baseurl = 'https://dev-audi-api.svwsx.cn/api-wap'
    break
  case 'prod':
    baseurl = 'https://dev-audi-api.svwsx.cn/api-wap'
    break
  default:
    break
}

export function get(token) {
	let url = baseurl+''
	return axios
		.get(url, {
			headers: { 'x-access-token': token },
		})
		.then((res) => {
			if (res.data.code == '00') {
				return res.data.data
			}
		})
}

export function post(param) {
	let url = baseurl+''
	let data = {
		pageId: param.id,
	}
	return axios
		.post(url, data, {
			headers: {
				'x-access-token': param.token,
			},
		})
		.then((res) => {
			if (res.data.code === '00') {
				return res.data.data
			}
		})
}

export function put(data) {
	let url = baseurl+''
	return axios.put(url, data).then((res) => {
		console.log(res)
	})
}