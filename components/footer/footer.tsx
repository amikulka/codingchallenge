import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import logoIcon from '../../public/spendin-logo.svg'
import InformationLinks from './InformationLinks'
import PolicyLinks from './PolicyLinks'

export default function Footer() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ maxWidth: 425, flexGrow: 1, flexBasis: 375 }}>
          <Box sx={{ display: 'flex' }}>
            <Image src={logoIcon} alt='spend.in logo' />
            <Typography
              variant='h5'
              noWrap
              sx={{
                textDecoration: 'none',
              }}
            >
              Spend.In
            </Typography>
          </Box>
          <Typography variant='body1' sx={{ pr: '20%' }}>
            Data visualization, and expense management for your business.
          </Typography>
        </Box>
        <InformationLinks />
        <div
          style={{
            width: '100%',
            border: '1px solid #CEBEFE',
            justifySelf: 'center',
            margin: '30px 0',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: { sm: 'wrap' },
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: 'auto', sm: '100dvw' },
          }}
        >
          <PolicyLinks />
          <Typography>© Picko Lab 2022</Typography>
        </Box>
      </Box>
    </Container>
  )
}
