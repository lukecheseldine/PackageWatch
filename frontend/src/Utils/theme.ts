import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1E6BD8',
        },
        secondary: {
            main: '#E0A336',
        },
        background: {
            default: '#DDE7F5',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
})
