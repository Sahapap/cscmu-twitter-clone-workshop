import axios from "axios"

const serverUrl = process.env.REACT_SERVER_API || "http://localhost:3001"

const createAxios = (url: string, method: any, data?: any, headers?: any) => {
    return axios({
        method,
        url: `${serverUrl}${url}`,
        data: {...data},
        headers: {
            'Authorization': localStorage.getItem('token') || "",
            ...headers
        }
    })
}

const getMethod = (url: string) => {
    return createAxios(url, 'GET')
}

const postMethod = (url: string, data?: any) => {
    return createAxios(url, 'POST', data)
}

const putMethod = (url: string, data: any) => {
    return createAxios(url, 'PUT', data)
}

const deleteMethod = (url: string, data?: any) => {
    return createAxios(url, 'DELETE', data)
}

export {
    getMethod,
    postMethod,
    putMethod,
    deleteMethod
}