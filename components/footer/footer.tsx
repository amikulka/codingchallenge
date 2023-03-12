import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import logoIcon from '../../public/spendin-logo.svg'
import InformationLinks from './InformationLinks'
import PolicyLinks from './PolicyLinks'

export default function Footer() {
  return (
    <Container sx={{ mt: 14 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ maxWidth: 400, flexGrow: 1, flexBasis: 350 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Image src={logoIcon} alt='spend.in logo' />
            <Typography
              variant='h4'
              noWrap
              sx={{
                textDecoration: 'none',
              }}
            >
              Spend.In
            </Typography>
          </Box>
          <Typography variant='body1' sx={{ pr: '30%', pt: 4, pb: 8 }}>
            Data visualization, and expense management for your business.
          </Typography>
        </Box>
        <InformationLinks />
        <Box
          sx={{
            width: '100%',
            border: '1px solid #CEBEFE',
            justifySelf: 'center',
            mt: 10,
            mb: 4,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: { sm: 'wrap' },
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: 'auto', sm: '100dvw' },
            gap: { xs: 2 },
            mb: 10,
          }}
        >
          <PolicyLinks />
          <Typography>© Picko Lab 2022</Typography>
        </Box>
      </Box>
    </Container>
  )
}
