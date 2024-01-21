import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

const GroupDetail = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    let { groupName } = useParams()
    const navigate = useNavigate()

    // Dummy data for group members
    const groupMembers = [
        { name: 'User 1', role: 'admin' },
        { name: 'User 2', role: 'member' },
        { name: 'User 3', role: 'pending' },
    ]
    return (
        <Box
            sx={{
                width: '100%',
                padding: isSmallScreen ? '50px 20px' : '50px 200px',
            }}
        >
            <Typography variant="h4" align="left">
                {groupName}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.paper,
                    minWidth: '100%',
                }}
            >
                {groupMembers.map((member, index) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '10px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="h6">{member.role}</Typography>
                        <IconButton
                            sx={{
                                color: theme.palette.error.main,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            Remove
                            <CloseIcon />
                        </IconButton>
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/home')}
                    sx={{ marginTop: '20px' }}
                >
                    Back to Home
                </Button>
            </Box>
        </Box>
    )
}

export default GroupDetail
