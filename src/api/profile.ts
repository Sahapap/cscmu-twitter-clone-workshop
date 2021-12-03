import { getMethod, postMethod } from '../utils/axios'

const getMyProfile = async() => {
    return await getMethod('/api/profiles/me')
}

const updateMyProfile = async(data: any) => {
    return await postMethod('/api/profiles/me', data)
}

export {
    getMyProfile,
    updateMyProfile
}