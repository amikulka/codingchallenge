import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'

import dashboardImage from '../../public/dashboard.png'

export default function Hero() {
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          mt: { xs: '24px', md: '120px' },
        }}
      >
        <Typography>All your business expenses in one place.</Typography>
        <Typography component='p'>
          Your one-stop finance empower platform. Manage all your business
          expenses with our supafast app.
        </Typography>
        <Box>
          <Button>Get a Free Demo</Button>
          <Button>See Pricing</Button>
        </Box>
        <Box className='dashboard-image'>
          <Image src={dashboardImage} quality={100} alt='dashboard' />
        </Box>
      </Container>
    </>
  )
}
