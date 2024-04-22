import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme.provider.tsx'
import { AppRouter } from './core/AppRouter.tsx'
import '../app/globals.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
