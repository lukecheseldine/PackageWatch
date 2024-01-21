import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import App from './App'
import { theme } from './Utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Auth0Provider
                domain="packagewatch.us.auth0.com"
                clientId="rQKVJNT4uC47HHy9GOoqTt9WloNuDduM"
                authorizationParams={{
                    redirect_uri: window.location.origin + '/home',
                }}
            >
                <App />
            </Auth0Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
