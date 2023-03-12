import { Box, Typography } from '@mui/material'
import Link from 'next/link'
export default function InformationLinks() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 300,
          display: 'flex',
          gap: 8,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Typography variant='h6'>Product</Typography>
          <Link
            href={''}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Typography variant='smallLight'>Digital Invoice</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Insights</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Reimbursements</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Virtual Assistant</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>
              Artificial Intelligence
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant='h6'>Company</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>About Us</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Newsletters</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Our Partners</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Career</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Contact Us</Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: 300,
          display: 'flex',
          gap: 10,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant='h6'>Resources</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Blog</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Pricing</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>FAQ</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Events</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Ebook & Guide</Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant='h6'>Follow Us</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>LinkedIn</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Twitter</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Instagram</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>Facebook</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant='smallLight'>YouTube</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
