import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import Image from 'next/image'

import dashboardImage from '../../public/dashboard.png'

export default function Hero() {
  let theme = useTheme()
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            textAlign: { sm: 'center' },
            maxWidth: 750,
            mt: { xs: '24px', md: '120px' },
          }}
        >
          All your business expenses in one place.
        </Typography>
        <Typography
          sx={{
            textAlign: { sm: 'center', maxWidth: 620 },
            mt: { xs: '12px', md: '24px' },
          }}
        >
          Your one-stop finance empower platform.
          <br /> Manage all your business expenses with our supafast app.
        </Typography>
        <Box
          sx={{
            mt: '40px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Button
            color='primary'
            variant='contained'
            sx={{
              width: { xs: '80dvw', sm: 'auto', textTransform: 'unset' },
              py: '.5rem',
              borderRadius: '1.5rem',
            }}
          >
            Get a Free Demo
          </Button>
          <Button
            variant='secondary'
            sx={{
              width: {
                xs: '80dvw',
                sm: 'auto',
                textTransform: 'unset',
              },
              py: '.5rem',
              borderRadius: '1.5rem',
            }}
          >
            See Pricing
          </Button>
        </Box>
        <Box className='dashboard-image'>
          <Image src={dashboardImage} quality={100} alt='dashboard' />
        </Box>
      </Container>
    </>
  )
}
