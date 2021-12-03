// import Button from '@mui/material/Button';
import { useEffect, useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { getMyProfile, updateMyProfile } from '../api/profile'

function ProfileComponet(){
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [history, setHistory] = useState<string>("")
    const [website, setWebsite] = useState<string>("")
    const [userProfile, setUserProfile] = useState<any>({})

    useEffect(() => {
        async function GetProfile() {
            let result = await getMyProfile()
            console.log(result.data)
            if (result && result.data){
                let { profile } = result.data
                setName(profile.name || "")
                setHistory(profile.history || "")
                setWebsite(profile.website || "")
                setUserProfile(profile || {})
            }
        }

        GetProfile()
        console.log('Render Cat Component')
    }, [])

    const onButtonClick = async() => {
        await updateMyProfile({ name, history, website })
        setIsEdit(false)
    }

    // const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value)
    // }

    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h2" component="div" gutterBottom>
                Profile
            </Typography>
            <div style={{ textAlign: 'right' }}>
                {
                    isEdit && (
                        <Button onClick={onButtonClick}>
                            Save
                        </Button>
                    )
                }
                <Button onClick={() => {
                    if (isEdit){
                        setName(userProfile.name)
                        setHistory(userProfile.history)
                        setWebsite(userProfile.website)
                    }

                    setIsEdit(prev => prev ? false : true)
                }}>
                    { isEdit ? "Cancel" : "Edit" }
                </Button>
               
            </div>
            <Typography variant="h6" gutterBottom component="div">
                Name: { 
                    isEdit ? 
                    <TextField id="filled-basic" 
                        label="Name" 
                        variant="outlined"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    /> : 
                    name
                }
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                History: { 
                    isEdit ? 
                    <TextField id="filled-basic" label="History" variant="outlined" 
                        value={history}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setHistory(e.target.value)}
                    /> : 
                    history
                }
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Website: { 
                    isEdit ? 
                    <TextField id="filled-basic" label="Website" variant="outlined" 
                        value={website}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
                    /> : 
                    website
                }
            </Typography>

        </Box>
    )
}

export default ProfileComponet