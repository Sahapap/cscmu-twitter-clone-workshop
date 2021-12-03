import { postMethod, deleteMethod } from '../utils/axios'

const createNewPost = async(data: any) => {
    await postMethod('/api/posts', data)
}

const clickLovePost = async(postId: string) => {
    await postMethod(`/api/posts/${postId}/love`)
}

const clickUnlovePost = async(postId: string) => {
    await deleteMethod(`/api/posts/${postId}/un-love`)
}

export {
    createNewPost,
    clickLovePost,
    clickUnlovePost
}