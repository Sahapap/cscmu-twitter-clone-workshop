import { useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';
import { postMethod } from '../utils/axios'
import { useNavigate } from 'react-router-dom'

function LoginComponet(){
    const [username, setUsername] = useState<String>("")
    const [password, setPassword] = useState<String>("")
    const navigate = useNavigate()

    const onLoginClick = () => {
        postMethod('/api/login', { username, password }).then(res => {
            console.log(res.data)
            if (res.data && res.data.token) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                navigate('/')
            }
        })
    }

    return (
        <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h2" component="div" gutterBottom>
                    Login
                </Typography>

                <Box sx={{ width: '100%', display: 'grid' }}>
                    <TextField label="Username" variant="outlined" sx={{  margin: 1 }} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                    <TextField type='password' label="Password" variant="outlined" sx={{  margin: 1 }} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                    <Button onClick={onLoginClick}>Log in</Button>
                </Box>
                

            </Box>
        </div>
    )
}

export default LoginComponet