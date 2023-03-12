import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import dashboardImage from '../../public/dashboard.png'
import CtaButtons from '../common/CtaButtons'

export default function Hero() {
  return (
    <>
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
      <CtaButtons />
      <Box className='dashboard-image' sx={{ mt: 4 }}>
        <Image
          src={dashboardImage}
          quality={100}
          alt='dashboard'
          style={{ boxShadow: '0 0px 30px rgb(0 0 0 / 15%)' }}
        />
      </Box>
    </>
  )
}
