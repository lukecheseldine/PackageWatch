import React from 'react'
import {
    Container,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    IconButton,
    useTheme,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Card,
    CardContent,
    CardActions,
    useMediaQuery,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useNavigate } from 'react-router-dom'

const dummyGroups = [
    { address: '123 Main St', members: 5 },
    { address: '456 Elm St', members: 8 },
    { address: '789 Oak St', members: 3 },
]

const Home = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                maxWidth: isSmallScreen ? '400px' : '800px',
                padding: isSmallScreen ? '50px 20px' : '50px 200px',
            }}
        >
            <Typography variant="h4" align="left">
                Welcome, Luke
            </Typography>
            <Box display={'flex'} flexDirection={'row'} padding={1} marginTop={5}>
                <Typography variant="h6">My Groups</Typography>
            </Box>
            <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                flexWrap="wrap"
                gap={'40px'}
                justifyContent="space-between"
            >
                {dummyGroups.map((group, index) => (
                    <Card
                        key={index}
                        sx={{ marginBottom: 2, flex: 1, alignSelf: 'flex-start', minHeight: '100%', width: '200px' }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {group.address}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {group.members} Members
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Button
                                onClick={() => {
                                    navigate(`/group/${group.address}`)
                                }}
                                size="small"
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Home
