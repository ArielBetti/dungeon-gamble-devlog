import React from 'react'
import ReactDOM from 'react-dom/client'
import '../app/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme.provider.tsx'
import Header from './components/composable/Header.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './core/AppRouter.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark">
          <div className='pb-20'>
            <Header />
          </div>
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
