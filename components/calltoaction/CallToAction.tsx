import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import ctaImage from '../../public/call-to-action-img.png'

export default function CallToAction() {
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', flexDirection: 'column', mt: 8 }}
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
            <Typography variant='h5'>DOWNLOAD NOW!</Typography>
            <Typography variant='h2' sx={{ mt: 2 }}>
              Start tracking your business expenses today
            </Typography>
            <Typography variant='body1' sx={{ mt: 2 }}>
              Are you ready to make your business more organized?
              <br />
              Download Spend.In now!
            </Typography>
            <Button
              color='primary'
              variant='contained'
              sx={{
                width: { xs: '80dvw', sm: '185px', textTransform: 'unset' },
                py: '.5rem',
                borderRadius: '1.5rem',
                my: 4,
              }}
            >
              Get a Free Demo
            </Button>
          </Box>
          <Box className='cta-image-container'>
            <Image src={ctaImage} alt='call to action image' />
          </Box>
        </Box>
      </Container>
    </>
  )
}
