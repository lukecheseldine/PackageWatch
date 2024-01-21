import { useAuth0 } from '@auth0/auth0-react'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Settings = () => {
    const user = useAuth0()
    const navigate = useNavigate()
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user?.user?.name}</p>
            <p>Email: {user?.user?.email}</p>
            <IconButton
                onClick={() => {
                    navigate('/home')
                }}
            >
                <ArrowBackIcon />
            </IconButton>
        </div>
    )
}

export default Settings
