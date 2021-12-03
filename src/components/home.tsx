import '../Book.css'
import { useEffect, useState, ChangeEvent } from 'react'
// import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import PostComponent from './postComponent'
import { TextField, Typography } from '@mui/material';
import { getNewsFeed } from '../api/feed'
import { createNewPost } from '../api/post'

// interface IBook{
//     no: number;
//     name? : string;
// }

function BookComponet(){
    // const navigate = useNavigate()
    const [feeds, setFeeds] = useState<any>([])
    const [content, setContent] = useState<string>("")

    async function GetFeeds() {
        let result = await getNewsFeed()
        console.log(result)
        if (result && result.length > 0){
            setFeeds(result)
        }
    }

    useEffect(() => {
        async function GetNewFeeds() {
            await GetFeeds()
        }

        GetNewFeeds()
    }, [])

    const onPostContent = async() => {
        await createNewPost({ content })
        setContent("")
        await GetFeeds()
    }
    
    return (
        <Box sx={{ width: '100%' }}>
             <Typography variant="h2" component="div" gutterBottom>
                Home
            </Typography>
            <Box sx={{ border: '1px solid', width: '100%', marginBottom: 5, height: 300, padding: 2 }}>
                <Typography variant="h6" component="div" gutterBottom>
                    Post
                </Typography>
                <TextField 
                    multiline maxRows={15} sx={{ width: '100%' }} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
                />
                <div style={{ textAlign: 'right' }}>
                    <Button onClick={onPostContent}>Post</Button>
                </div>
            </Box>
            {/* <PostComponent/>
            <PostComponent/> */}
            {
                feeds.map((m: any, i: number) => {
                    return (
                        <PostComponent
                            key={i}
                            content={m.content}
                            createdDate={m.createdOn}
                            createdUser={m.createdUser}
                            lovePost={m.lovePost}
                            postId={m.postId}
                        />
                    )
                })
            }
       </Box>
    )
}

export default BookComponet