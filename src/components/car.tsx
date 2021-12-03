import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { getAllResource } from '../api'

function CarComponet(){
    const [name, setName] = useState<string>("")
    const [length, setLength] = useState<number>(0)

    useEffect(() => {
        async function getResources(){
            let result = await getAllResource()
            console.log('this is result: ', result)
        }

        getResources()
    }, [])
 
    useEffect(() => {
        setLength(name.length)
    }, [name])

    return (
       <div>
           <TextField onChange={(e: any) => setName(e.target.value)}/>
            <p>Car name: {name}</p>
            <br/>
            <p>length: {length}</p>
       </div>
    )
}

export default CarComponet