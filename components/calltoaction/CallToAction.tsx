import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import ctaImage from '../../public/call-to-action-img.png'

export default function CallToAction() {
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '600px',
              pr: '20px',
            }}
          >
            <Typography variant='h6'>DOWNLOAD NOW!</Typography>
            <Typography variant='h4'>
              Start tracking your business expenses today
            </Typography>
            <Typography variant='body1'>
              Are you ready to make your business more organized?
              <br />
              Download Spend.In now!
            </Typography>
            <Button sx={{ maxWidth: 185 }}>Get A Free Demo</Button>
          </Box>
          <Box className='cta-image-container'>
            <Image src={ctaImage} alt='call to action image' />
          </Box>
        </Box>
      </Container>
    </>
  )
}
