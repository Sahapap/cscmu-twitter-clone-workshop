import axios from "axios";

const getAllResource = async() => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return result
}

export {
    getAllResource
}