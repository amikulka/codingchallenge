import { Box, Typography } from '@mui/material'
import Link from 'next/link'
export default function InformationLinks() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
      <Box
        sx={{
          width: 300,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant='h5'>Product</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Digital Invoice</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Insights</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Reimbursements</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Virtual Assistant</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Artificial Intelligence</Typography>
          </Link>
        </Box>
        <Box>
          <Typography variant='h5'>Company</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>About Us</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Newsletters</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Our Partners</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Career</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Contact Us</Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: 300,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant='h5'>Resources</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Blog</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Pricing</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>FAQ</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Events</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Ebook & Guide</Typography>
          </Link>
        </Box>
        <Box>
          <Typography variant='h5'>Follow Us</Typography>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>LinkedIn</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Twitter</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Instagram</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Facebook</Typography>
          </Link>
          <Link href={''} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>YouTube</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
