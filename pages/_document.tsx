import { Html, Head, Main, NextScript } from 'next/document'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../utils/theme'
import { ThemeProvider } from '@mui/material/styles'
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  )
}
