import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import logoIcon from '../../public/spendin-logo.svg'
import InformationLinks from './InformationLinks'
import PolicyLinks from './PolicyLinks'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        mt: 14,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          flexBasis: 350,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
        <Typography
          variant='body1'
          sx={{ maxWidth: 300, pt: 4, pb: 8, textAlign: 'center' }}
        >
          Data visualization, and expense management for your business.
        </Typography>
      </Box>
      <InformationLinks />
      <Box
        sx={{
          width: '90%',
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
          px: 2,
          mb: 10,
        }}
      >
        <PolicyLinks />
        <Typography>© Picko Lab 2022</Typography>
      </Box>
    </Box>
  )
}
