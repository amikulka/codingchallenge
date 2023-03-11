import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '../styles/styles.css'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../utils/theme'
import { ThemeProvider } from '@mui/material'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  )
}
