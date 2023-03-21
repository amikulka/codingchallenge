import Link from 'next/link'
import { Typography, Box } from '@mui/material'
export default function PolicyLinks() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { sm: 'space-between' },
        flexBasis: { sm: 500 },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant='h6'>Privacy Policy</Typography>
      </Link>
      <Typography
        variant='h6'
        sx={{ display: { xs: 'none', sm: 'inline-block' } }}
      >
        |
      </Typography>
      <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant='h6'>Terms & Conditions</Typography>
      </Link>
      <Typography
        variant='h6'
        sx={{ display: { xs: 'none', sm: 'inline-block' } }}
      >
        |
      </Typography>
      <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant='h6'>Cookie Policy</Typography>
      </Link>
    </Box>
  )
}
