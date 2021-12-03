import { getMethod } from '../utils/axios'

const getNewsFeed = async() => {
    let result = await getMethod('/api/feeds')
    return result.data
}

export {
    getNewsFeed
}